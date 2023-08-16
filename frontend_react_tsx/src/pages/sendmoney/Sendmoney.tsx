import React, { useEffect, useRef, useState } from "react";
import "./sendmoney.css";
import { vendors } from "../../data";
import Sidebar from "../dashboard/Sidebar";
import {
  ByteString,
  ContractCalledEvent,
  PubKey,
  PubKeyHash,
  Scrypt,
  ScryptProvider,
  SensiletSigner,
  toByteString,
} from "scrypt-ts";
import { SVer } from "../../contracts/myApp";
import { sign } from "crypto";

const contractId = {
  txId: "38ed4c8c0cced7790e484208f1558ff95927e76c812e0e222966abfb8d75c66a",
  outputIndex: 0,
};

const Sendmoney = () => {
  const [selectedVendor, setSelectedVendor] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [fromAddress, setFromAddress] = useState("");
  const [transactionSuccess, setTransactionSuccess] = useState(false);

  const signerRef = useRef<SensiletSigner>();
  const [contractInstance, SetContract] = useState<SVer>();

  useEffect(() => {
    const signer = new SensiletSigner(new ScryptProvider());

    signerRef.current = signer;

    fetchContract();

    const subscription = Scrypt.contractApi.subscribe(
      {
        clazz: SVer,
        id: contractId,
      },
      (e: ContractCalledEvent<SVer>) => {
        SetContract(e.nexts[0]);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function fetchContract() {
    try {
      const instance = await Scrypt.contractApi.getLatestInstance(
        SVer,
        contractId
      );
      SetContract(instance);
    } catch (e: any) {
      console.error(e);
    }
  }

  const handleVendorClick = (
    title: string,
    category: string,
    address: string
  ) => {
    setSelectedVendor(title);
    setSelectedCategory(category);
    setSelectedAddress(address);
  };

  const handleSendClick = async (
    sender: PubKeyHash,
    sender_pubkey: PubKey,
    _category: ByteString,
    amount: bigint,
    to: PubKeyHash
  ) => {
    const signer = signerRef.current as SensiletSigner;

    if (contractInstance && signer) {
      const { isAuthenticated, error } = await signer.requestAuth();

      if (!isAuthenticated) {
        throw new Error(error);
      }
      await contractInstance.connect(signer);

      const nextInstance = contractInstance.next();

      contractInstance.bindTxBuilder("transferFunds", SVer.tranferTxBuilder);

      contractInstance.methods
        .transferFunds(
          PubKeyHash(sender),
          PubKey(sender_pubkey),
          toByteString(_category),
          BigInt(amount),
          PubKeyHash(to),
          {
            next: {
              instance: nextInstance,
              balance: contractInstance.balance,
            },
            changeAddress: await signer.getDefaultAddress(),
          }
        )
        .then((result) => {
          console.log(`Transfer tx: ${result.tx.id}`);
        })
        .catch((e) => {
          console.error(`Transfer error: ${e}`);
        });
    }
  };

  return (
    <>
      {transactionSuccess ? (
        <section className="success">
          <h1>Transaction Successful!</h1>
          <br />
          <h2>Redirecting to transaction history on whatsonchain...⌛️</h2>
        </section>
      ) : (
        <div>
          <Sidebar />

          <div className="sendmoney">
            <div className="sendmoney_dash_wrapper">
              {vendors.map(({ id, icon, title, address, category }) => (
                <div
                  className="sendmoney_value"
                  key={id}
                  onClick={() => handleVendorClick(title, category, address)}
                >
                  <span>{icon}</span>
                  <h4>{title}</h4>
                </div>
              ))}
              <br />
            </div>
          </div>

          <form className="sendmoneynow">
            <div className="send-money-form">
              <label htmlFor="sender">From:</label>
              <input
                type="text"
                value={fromAddress}
                onChange={(e) => setFromAddress(e.target.value)}
              />
            </div>

            <div className="send-money-form">
              <label htmlFor="vendor">Recipient:</label>
              <input type="text" value={selectedVendor || ""} />
            </div>

            <div className="send-money-form">
              <label htmlFor="category">Category:</label>
              <input type="text" value={selectedCategory || ""} />
            </div>

            <div className="send-money-form">
              <label htmlFor="address">Address</label>
              <input type="text" value={selectedAddress || ""} />
            </div>

            <div className="send-money-form">
              <label htmlFor="amount">Amount</label>
              <input type="number" />
            </div>

            <button className="btn" onClick={handleSendClick}>
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Sendmoney;
