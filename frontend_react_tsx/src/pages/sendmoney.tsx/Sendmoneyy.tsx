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
  ContractTransaction,
  bsv,
  StatefulNext,
  Utils,
  hash160,
  slice,
} from "scrypt-ts";
import { SVer } from "../../contracts/myApp";
//he imported item as well from his smart contract
import { sign } from "crypto";
import { send } from "process";

const contractId = {
  txId: "042acc765bb753093ded200e041e251d22c0282165c5e30c015f58f2b3efe124",
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
    const sender_pkh = bsv.Address.fromString(sender)
    const receiver_pkh = bsv.Address.fromString(to)

    if (contractInstance && signer) {
      const { isAuthenticated, error } = await signer.requestAuth();

      if (!isAuthenticated) {
        throw new Error(error);
      }
      await contractInstance.connect(signer);

      // Build next instance and update needed properties.
      const nextInstance = contractInstance.next();
      // Transfer amount is reflected t
      nextInstance.balances[0].balance -= BigInt(amount);
      // Update receivers data in the fixed array
      nextInstance.balances[1] = {
        address: PubKeyHash(receiver_pkh.toHex().slice(2)),
        category: toByteString(_category, true),
        balance: BigInt(amount),
      };

      contractInstance.bindTxBuilder(
        "transferFunds",
        async(
          current: SVer,
          options: MethodCallOptions<SVer>,
          sender: PubKeyHash,
          sender_pubkey: PubKey,
          _category: ByteString,
          amount: bigint,
          to: PubKeyHash
        ): Promise<ContractTransaction> => {
        
          console.log(nextInstance.lockingScript)
          const unsignedTx: bsv.Transaction = new bsv.Transaction()
            // add contract input
            .addInput(current.buildContractInput(options.fromUTXO))
            // build next instance output
            .addOutput(
              new bsv.Transaction.Output({
                script: nextInstance.lockingScript,
                satoshis: current.balance,
              })
            )
            // Pay seller output
            .addOutput(
              new bsv.Transaction.Output({
                script: bsv.Script.fromHex(
                  Utils.buildPublicKeyHashScript(hash160(sender_pubkey))
                ),
                satoshis: Number(amount),
              })
            );

          // build change output
          
            unsignedTx.change(await signer.getDefaultAddress());

          console.log(options.changeAddress)

          return Promise.resolve({
            tx: unsignedTx,
            atInputIndex: 0,
            nexts: [
              {
                instance: nextInstance,
                atOutputIndex: 0,
                balance: current.balance,
              },
            ],
          });
        }
      );

      
      
      console.log(sender_pkh.toHex())
      console.log(receiver_pkh.toHex())

      contractInstance.methods
        .transferFunds(
          PubKeyHash(sender_pkh.toHex().slice(2)),
          PubKey(sender_pubkey),
          toByteString(_category, true),
          BigInt(amount),
          PubKeyHash(receiver_pkh.toHex().slice(2)),
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
