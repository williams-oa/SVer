import { SVer } from '../../src/contracts/trial'
import {
    getDefaultSigner,
    randomPrivateKey,
} from '../utils/txHelper'

import {
    bsv,
    ContractTransaction,
    findSig,
    MethodCallOptions,
    PubKey,
    PubKeyHash,
    toByteString,
    toHex,
    Utils,
} from 'scrypt-ts'

async function main() {
    await SVer.compile()
    let erc20 = new SVer()

    const [alicePrivateKey, alicePubKey, ,] = randomPrivateKey()
    const [bobPrivateKey, bobPubKey, ,] = randomPrivateKey()
    const [lilyPrivateKey, lilyPubKey, ,] = randomPrivateKey()

    const aliceAddress = PubKeyHash(alicePrivateKey.toAddress().toObject().hash)
    const bobPubkey = PubKey(toHex(bobPrivateKey.publicKey))

    const bobAddress = PubKeyHash(bobPrivateKey.toAddress().toObject().hash)
    const lilyAddress = PubKeyHash(lilyPrivateKey.toAddress().toObject().hash)

    const aliceBalance = 1200n
    const transferAmount = 1000n
    const bobBalance = 0n
    const aliceCategory = toByteString('Food', true)

    // connect to a signer
    const signer = getDefaultSigner([alicePrivateKey, bobPrivateKey, lilyPrivateKey])
    await erc20.connect(signer)

    // deploy
    const deployTx = await erc20.deploy()
    console.log('SVer contract deployed: ', deployTx.id)
    let aliceInstance = erc20.next()
    const lockedSatoshi = 1

    // Update props for next instance.
    aliceInstance.balances[0] = {
        address: aliceAddress,
        category: aliceCategory,
        balance: aliceBalance,
    }

    // Call current instance.
    const { tx } = await erc20.methods.allocateFunds(
        aliceAddress,
        aliceCategory,
        aliceBalance,
        {
            pubKeyOrAddrToSign: alicePubKey,
            next: {
                instance: aliceInstance,
                balance: lockedSatoshi,
                atOutputIndex: 0,
            },
        } as MethodCallOptions<SVer>
    )

    console.log(
        `Alice allocated ${transferAmount} to ${aliceCategory}: ${tx.id}`
    )

    // Set next instance as current instance...
    erc20 = aliceInstance

    const bobInstance = aliceInstance.next()

    bobInstance.balances[0].balance = aliceBalance - transferAmount
    bobInstance.balances[1] = {
        address: bobAddress,
        category: aliceCategory,
        balance: bobBalance + transferAmount,
    }

    // Bind custom TX builder to add P2PKH output.
    aliceInstance.bindTxBuilder('transferFunds', (
        current: SVer,
        options: MethodCallOptions<SVer>,
        ...args
    ): Promise<ContractTransaction> => {
        const unsignedTx: bsv.Transaction = new bsv.Transaction()
            // add contract input
            .addInput(current.buildContractInput(options.fromUTXO))
            // build next instance output
            .addOutput(
                new bsv.Transaction.Output({
                    script: bobInstance.lockingScript,
                    satoshis: lockedSatoshi,
                })
            )
            // build P2PKH output
            .addOutput(
                new bsv.Transaction.Output({
                    script: bsv.Script.fromHex(
                        Utils.buildPublicKeyHashScript(aliceAddress)
                    ),
                    satoshis: Number(transferAmount),
                })
            )

        // build change output
        if (options.changeAddress) {
            unsignedTx.change(options.changeAddress)
        }

        return Promise.resolve({
            tx: unsignedTx,
            atInputIndex: 0,
            nexts: [
                {
                    instance: bobInstance,
                    atOutputIndex: 0,
                    balance: lockedSatoshi,
                },
            ],
        })
    })

    const { tx: transferTx } = await aliceInstance.methods.transferFunds(
        aliceAddress,
        PubKey(alicePubKey.toHex()),
        (sigResps) => findSig(sigResps, alicePubKey),
        aliceCategory,
        transferAmount,
        bobAddress,
        {
            pubKeyOrAddrToSign: alicePubKey,
            changeAddress: await signer.getDefaultAddress(),
            next: {
                instance: bobInstance,
                balance: lockedSatoshi,
                atOutputIndex: 0,
            },
        } as MethodCallOptions<SVer>
    )

    console.log(
        `Alice transfered ${transferAmount} for ${aliceCategory}, to Bob: ${transferTx.id}`
    )

    aliceInstance = bobInstance
}

describe('Test SmartContract `SVer` on testnet', () => {
    it('should succeed', async () => {
        await main()
    })
})