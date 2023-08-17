import { expect, use } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { Allowance, SVer } from '../../src/contracts/trial'
import {
    bsv,
    ByteString,
    ContractTransaction,
    findSig,
    FixedArray,
    hash160,
    MethodCallOptions,
    PubKey,
    PubKeyHash,
    toByteString,
    toHex,
    Utils,
} from 'scrypt-ts'
import {
    dummyUTXO,
    getDummySigner,
    getDummyUTXO,
    inputSatoshis,
} from '../utils/txHelper'

use(chaiAsPromised)
import Transaction = bsv.Transaction
import { myPublicKey } from '../utils/privateKey'

const signer = getDummySigner()

describe('Test SmartContract `SVer`', () => {
    let inst: SVer

    before(async () => {
        await SVer.compile()

        inst = new SVer()
        await inst.connect(signer)
    })

    async function allocateFunds(
        instance: SVer,
        addr: PubKeyHash,
        category: ByteString,
        amount: bigint
    ): Promise<{
        tx: Transaction
        newInstance: SVer
    }> {
        const newInstance = instance.next()

        newInstance.balances[0] = {
            address: addr,
            balance: amount,
            category: category,
        }

        const res = await instance.methods.allocateFunds(
            addr,
            category,
            amount,
            {
                fromUTXO: getDummyUTXO(inputSatoshis),
                pubKeyOrAddrToSign: myPublicKey,
                changeAddress: myPublicKey.toAddress(),
                next: {
                    instance: newInstance,
                    balance: inputSatoshis,
                },
            } as MethodCallOptions<SVer>
        )

        return {
            tx: res.tx,
            newInstance: newInstance,
        }
    }

    async function transferFunds(
        instance: SVer,
        sender: PubKeyHash,
        sender_pubkey: PubKey,
        _category: ByteString,
        amount: bigint,
        to: PubKeyHash
    ): Promise<{
        tx: Transaction
        newInstance: SVer
    }> {
        const newInstance = instance.next()

        newInstance.balances[0].balance -= amount

        newInstance.balances[1] = {
            address: to,
            category: _category,
            balance: amount,
        }

        const publicKey = bsv.PublicKey.fromString(sender_pubkey)

        // Bind custom TX builder to add P2PKH output.
        instance.bindTxBuilder(
            'transferFunds',
            (
                current: SVer,
                options: MethodCallOptions<SVer>,
                ...args
            ): Promise<ContractTransaction> => {
                const unsignedTx: Transaction = new Transaction()
                    // add contract input
                    .addInput(current.buildContractInput(options.fromUTXO))
                    // build next instance output
                    .addOutput(
                        new Transaction.Output({
                            script: newInstance.lockingScript,
                            satoshis: inputSatoshis,
                        })
                    )
                    // build P2PKH output
                    .addOutput(
                        new Transaction.Output({
                            script: bsv.Script.fromHex(
                                Utils.buildPublicKeyHashScript(
                                    hash160(sender_pubkey)
                                )
                            ),
                            satoshis: Number(amount),
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
                            instance: newInstance,
                            atOutputIndex: 0,
                            balance: inputSatoshis,
                        },
                    ],
                })
            }
        )

        const { nexts, tx } = await instance.methods.transferFunds(
            sender,
            sender_pubkey,
            _category,
            amount,
            to,
            {
                fromUTXO: getDummyUTXO(inputSatoshis),
                pubKeyOrAddrToSign: publicKey,
                changeAddress: publicKey.toAddress(),
                next: {
                    instance: newInstance,
                    balance: inputSatoshis,
                },
            } as MethodCallOptions<SVer>
        )

        return {
            tx: tx,
            newInstance: nexts[0].instance,
        }
    }

    it('transfer', async () => {
        const address = await signer.getDefaultAddress()

        const aliceKey = bsv.PrivateKey.fromRandom(bsv.Networks.testnet)
        const alicePubkey = PubKey(toHex(aliceKey.publicKey))
        const aliceAddress = PubKeyHash(aliceKey.toAddress().toObject().hash)

        const bobKey = bsv.PrivateKey.fromRandom(bsv.Networks.testnet)
        const bobPubkey = PubKey(toHex(bobKey.publicKey))
        const bobAddress = PubKeyHash(bobKey.toAddress().toObject().hash)

        signer.addPrivateKey(aliceKey)
        signer.addPrivateKey(bobKey)

        const aliceCategory = toByteString('Food', true)
        const aliceBalance = 1000n

        const { tx: tx1, newInstance: inst_1 } = await allocateFunds(
            inst,
            aliceAddress,
            aliceCategory,
            aliceBalance
        )

        // Check if the allocation transaction was successful
        const result1 = tx1.verify()
        expect(result1).to.be.true

        const { tx: tx2, newInstance: inst_2 } = await transferFunds(
            inst_1,
            aliceAddress,
            alicePubkey,
            aliceCategory,
            aliceBalance,
            bobAddress
        )
        const result = tx2.verifyScript(0)
        expect(result.success, result.error).to.eq(true)

        console.log(
            `transfer ${1000n} Gold to alice: ${aliceKey
                .toAddress()
                .toString()}`
        )
    })
})
