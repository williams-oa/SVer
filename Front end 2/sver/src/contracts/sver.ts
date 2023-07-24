import { PrivateKey, Address, Transaction, Script } from 'bsv';
import { SmartContract, method } from 'scrypt-ts';

const bsvPrivateKey = 'cU8NbP48voBVSkY9gnTDyvaiAp3jiGGMWexsQ6dXejxbeTg3bWGT';
const network = 'testnet'; // or 'testnet' depending on your use case

export class SVer extends SmartContract {
    private allocations: { [address: string]: { [category: string]: bigint } } = {};

    @method()
    public allocateFunds(category: string, value: bigint) {
        if (value <= BigInt(0)) {
            throw new Error('Amount must be greater than 0');
        }

        const senderPrivateKey = PrivateKey.fromWIF(bsvPrivateKey);
        const senderAddress = Address.fromPrivateKey(senderPrivateKey, network);
        const senderKey = senderAddress.toString();

        if (!(senderKey in this.allocations)) {
            this.allocations[senderKey] = {};
        }

        if (!(category in this.allocations[senderKey])) {
            this.allocations[senderKey][category] = BigInt(0);
        }

        this.allocations[senderKey][category] += value;
    }
    @method()
    public transfer(recipient: string, category: string, value: bigint){
        const recipientAddress = Address.fromString(recipient);
        const senderPrivateKey = PrivateKey.fromWIF(bsvPrivateKey);
        const senderAddress = Address.fromPrivateKey(senderPrivateKey, network);
        const senderKey = senderAddress.toString();

        if (!(senderKey in this.allocations) || !(category in this.allocations[senderKey])) {
            throw new Error('Not sufficient balance');
        }

        if (this.allocations[senderKey][category] < value) {
            throw new Error('Not sufficient balance');
        }

        const transaction = new Transaction();
        transaction.from(this.createUnspentOutputs(senderAddress));
        transaction.to(recipientAddress, Number(value));
        transaction.sign(senderPrivateKey);

        const serializedTx = transaction.serialize();
        // Broadcast the transaction to the network

        this.allocations[senderKey][category] -= value;

        const recipientKey = recipientAddress.toString();
        if (!(recipientKey in this.allocations)) {
            this.allocations[recipientKey] = {};
        }

        if (!(category in this.allocations[recipientKey])) {
            this.allocations[recipientKey][category] = BigInt(0);
        }

        this.allocations[recipientKey][category] += value;
    }
    
    private createUnspentOutputs(senderAddress: Address): any[] {
        // Fetch and return the unspent outputs (UTXOs) for the sender address
        // You can use an API or database to retrieve the UTXOs
        // Format the UTXOs according to the required structure for the library
        // For example:
        return [
            {
                txid: 'b9d979a7fd81342d5f3107c35f7dad3c5cff5f53cbb03ab5c958db4edfe45f47',
                vout: 8,
                scriptPubKey: Script.buildPublicKeyHashOut(senderAddress).toHex(),
                satoshis: 6872.2908, // The value of the UTXO in satoshis
            },
            // Add more UTXOs if necessary
        ];
    }
    @method()
    public categoryBalance(category: string): number {
        const senderPrivateKey = PrivateKey.fromWIF(bsvPrivateKey);
        const senderAddress = Address.fromPrivateKey(senderPrivateKey, network);
        const senderKey = senderAddress.toString();

        if (!(senderKey in this.allocations) || !(category in this.allocations[senderKey])) {
            throw new Error('Category not found');
        }

        const satoshis = this.allocations[senderKey][category];
        return Number(satoshis);
    }
}
