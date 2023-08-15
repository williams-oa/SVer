import { SVer, Allowance } from '../../src/contracts/trial'
import {
    dummyUTXO,
    getDefaultSigner,
    inputSatoshis,
    randomPrivateKey,
} from '../utils/txHelper'
import { myPublicKey, myPublicKeyHash } from '../utils/privateKey'

import {
    bsv,
    findSig,
    hash160,
    HashedMap,
    MethodCallOptions,
    PubKey,
    PubKeyHash,
    toByteString,
    toHex,
    utxoFromOutput,
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
    await erc20.connect(
        getDefaultSigner([alicePrivateKey, bobPrivateKey, lilyPrivateKey])
    )

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

    // TODO: Fix all below this line...

    bobInstance.balances[0].balance = aliceBalance - transferAmount
    bobInstance.balances[1] = {
        address: bobAddress,
        category: aliceCategory,
        balance: bobBalance + transferAmount,
    }

    const { tx: transferTx } = await aliceInstance.methods.transferFunds(
        aliceAddress,
        alicePubKey,
        (sigResps) => findSig(sigResps, alicePubKey),
        aliceCategory,
        transferAmount,
        bobAddress,
        {
            pubKeyOrAddrToSign: alicePubKey,
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
