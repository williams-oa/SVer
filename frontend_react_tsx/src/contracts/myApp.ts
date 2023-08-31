import {
  method,
  SigHash,
  prop,
  SmartContract,
  assert,
  ByteString,
  PubKey,
  Sig,
  hash160,
  hash256,
  PubKeyHash,
  FixedArray,
  fill,
  toByteString,
  Utils,
  MethodCallTxBuilder,
} from "scrypt-ts";

export type Allowance = {
  address: PubKeyHash;
  balance: bigint;
  category: ByteString;
};

export class SVer extends SmartContract {
  @prop(true)
  balances: FixedArray<Allowance, 2>;

  constructor() {
    super(...arguments);

    this.balances = fill(
      {
        address: PubKeyHash(
          toByteString("0000000000000000000000000000000000000000")
        ),
        balance: 0n,
        category: toByteString(""),
      },
      2
    );
  }

  /**
   * Allocate funds to a certain category.
   * @param addr Address of the account
   * @param category Category to allocate the funds to
   * @param amount Amount of tokens to allocate
   */
  @method()
  public allocateFunds(addr: PubKeyHash, category: ByteString, amount: bigint) {
    // Senders will be the first index of the array
    this.balances[0] = {
      address: addr,
      balance: amount,
      category: category,
    };

    let outputs = this.buildStateOutput(this.ctx.utxo.value);
    outputs += this.buildChangeOutput();

    assert(
      this.ctx.hashOutputs == hash256(outputs),
      "Check hashOutputs failed"
    );
  }

  /**
     * Transfer tokens from `from` to `to` account.
     * @param from Owner's account details
     * @param sender Owner's public key
     * @param category Category tag
     * @param amount Amount of tokens to transfer
     * @param to Receiver's account details

     */

  @method()
  public transferFunds(
    sender: PubKeyHash,
    sender_pubkey: PubKey,
    _category: ByteString,
    amount: bigint,
    to: PubKeyHash
  ) {
    // checks senders details
    assert(
      this.balances[0].address == sender,
      'Please allocate funds before transfer'
    )
    assert(
      this.balances[0].balance >= amount,
      'Not enough balance in Category'
    )
    assert(this.balances[0].category == _category, 'Not the right category')
    assert(hash160(sender_pubkey) == sender, 'Check signature failed')

    // Transfer amount is reflected t
    this.balances[0].balance -= amount

    // Update receivers data in the fixed array
    this.balances[1] = { address: to, category: _category, balance: amount }

    let outputs = this.buildStateOutput(this.ctx.utxo.value)
    outputs += Utils.buildPublicKeyHashOutput(
      hash160(sender_pubkey),
      amount
    )
    outputs += this.buildChangeOutput()

    assert(
      this.ctx.hashOutputs == hash256(outputs),
      'Check hashOutputs failed'
    )
  }
}
