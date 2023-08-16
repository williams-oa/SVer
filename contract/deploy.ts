import { SVer } from '../contract/src/contracts/trial'
import {
    bsv,
    TestWallet,
    DefaultProvider,
    sha256,
    toByteString,
} from 'scrypt-ts'

function getScriptHash(scriptPublicKeyHex: string) {
    const res = sha256(scriptPublicKeyHex).match(/.{2}/g)
    if (!res) {
        throw new Error('scriptPublicKeyHex is not of even length')
    }
    return res.reverse().join('')
}

import * as dotenv from 'dotenv'
import { writeFileSync } from 'fs'

// Load the .env file
dotenv.config()

// Read the private key from the .env file.
// The default private key inside the .env file is meant to be used for the Bitcoin testnet.
// See https://scrypt.io/docs/bitcoin-basics/bsv/#private-keys
const privateKey = bsv.PrivateKey.fromWIF(
    'cP9cQmuwQKS7ZtwUWYTqZN33XdEPi5KNChcVWfAcXzA7UpYdA82a'
)

// Prepare signer.
// See https://scrypt.io/docs/how-to-deploy-and-call-a-contract/#prepare-a-signer-and-provider
const signer = new TestWallet(
    privateKey,
    new DefaultProvider({
        network: bsv.Networks.testnet,
    })
)

async function main() {
    await SVer.compile()

    // TODO: Adjust the amount of satoshis locked in the smart contract:
    const lockedSatoshi = 1

    const instance = new SVer()

    // Connect to a signer.
    await instance.connect(signer)

    // Contract deployment.
    const deployTx = await instance.deploy(lockedSatoshi)

    const scriptHash = getScriptHash(instance.lockingScript.toHex())
    const shFile = 'scriptHash'
    writeFileSync(shFile, scriptHash)

    console.log(`Contract contract deployed: ${deployTx.id}`)
}

main()
