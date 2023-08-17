import { useEffect, useRef, useState } from "react";
import "./sendmoney.css";
import SendForm from "./SendForm";
import {
  ByteString,
  ContractCalledEvent,
  PubKey,
  PubKeyHash,
  Scrypt,
  ScryptProvider,
  SensiletSigner,
  toByteString,
  MethodCallOptions,
} from "scrypt-ts";
import { SVer } from "../../contracts/myApp";
//he imported item as well from his smart contract
import { sign } from "crypto";

const contractId = {
  txId: "38ed4c8c0cced7790e484208f1558ff95927e76c812e0e222966abfb8d75c66a",
  outputIndex: 0,
};

const Sendmoneyy = () => {
  const signerRef = useRef<SensiletSigner>();
  const [contractInstance, SetContract] = useState<SVer>();

  useEffect(() => {
    // he had - const provider = new ScryptProvider
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
      console.error("fetchContract error: ", e);
    }
  }

  const handleSendClick = async (newitem: {
    sender: string;
    sender_pubkey: string;
    _category: string;
    amount: number;
    to: string;
  }) => {
    const { sender, sender_pubkey, _category, amount, to } = newitem;
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
            changeAddress: await signer.getDefaultAddress(),
            next: {
              instance: nextInstance,
              balance: contractInstance.balance,
            },
          } as MethodCallOptions<SVer>
        )
        .then((result) => {
          console.log(`Transfer tx: ${result.tx.id}`); 
        })
        .catch((e) => {
          console.error(`Transfer error: ${e}`);
        });
    }
  };

  return <SendForm onAdd={handleSendClick} />;
};

export default Sendmoneyy;
