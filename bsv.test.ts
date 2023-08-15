import { expect, use } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { Allowance, SVer } from '../../src/contracts/trial'
import {
    bsv,
    ByteString,
    findSig,
    FixedArray,
    hash160,
    HashedMap,
    MethodCallOptions,
    PubKey,
    PubKeyHash,
    toByteString,
    toHex,
} from 'scrypt-ts'
import { dummyUTXO, getDummySigner, inputSatoshis } from '../utils/txHelper'

use(chaiAsPromised)
import Transaction = bsv.Transaction
import { myPublicKey } from '../utils/privateKey'

const signer = getDummySigner()

describe('Test SmartContract `SVer`', () => {
    before(async () => {
        let inst: SVer, balances: FixedArray<Allowance, 2>
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

        const { nexts, tx } = await instance.methods.allocateFunds(
            addr,
            category,
            amount,
            {
                fromUTXO: dummyUTXO,
                pubKeyOrAddrToSign: myPublicKey,
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
        const { nexts, tx } = await instance.methods.transferFunds(
            sender,
            sender_pubkey,
            (sigResps) => findSig(sigResps, publicKey),
            _category,
            amount,
            to,
            {
                fromUTXO: dummyUTXO,
                pubKeyOrAddrToSign: publicKey,
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
        signer.addPrivateKey(aliceKey)

        const alicePubkey = PubKey(toHex(aliceKey.publicKey))

        const aliceAddress = PubKeyHash(aliceKey.toAddress().toObject().hash)
        const bobKey = bsv.PrivateKey.fromRandom(bsv.Networks.testnet)
        signer.addPrivateKey(bobKey)
        const bobPubkey = PubKey(toHex(bobKey.publicKey))

        const bobAddress = PubKeyHash(bobKey.toAddress().toObject().hash)
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
