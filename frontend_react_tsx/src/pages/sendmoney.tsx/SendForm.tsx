import { useState } from "react";
import "./sendmoney.css";
import Sidebar from "../dashboard/Sidebar";



  interface SendFormProps {
    onAdd: (item: { sender: string,
      sender_pubkey: string,
      _category: string,
      amount: number,
      to: string}) => void;
  }
  
  const SendForm: React.FC<SendFormProps> = ({ onAdd }) => {
    const [sender, setSender] = useState("");
    const [sender_pubkey, setSender_pubkey] = useState("");
    const [_category, set_Category] = useState("");
    const [amount, setAmount] = useState("");
    const [to, setTo] = useState("");
    const [vendorName, setVendorName] = useState("");
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onAdd({ sender, sender_pubkey, _category, amount: Number(amount), to });
    };


  return (
    <>
    <Sidebar/>
    <section>Nothing here</section>
    <form className="sendmoneynow" onSubmit={handleSubmit}>
      <div className="send-money-form">
        <label htmlFor="sender">From:</label>
        <input
          type="text"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
        />
      </div>

      <div className="send-money-form">
        <label htmlFor="vendor">Recipient Name:</label>
        <input
          type="text"
          value={vendorName}
          onChange={(e) => setVendorName(e.target.value)}
        />
      </div>

      <div className="send-money-form">
        <label htmlFor="senderpubkey">Sender PubKey:</label>
        <input
          type="text"
          value={sender_pubkey}
          onChange={(e) => setSender_pubkey(e.target.value)}
        />
      </div>

      <div className="send-money-form">
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          value={_category}
          onChange={(e) => set_Category(e.target.value)}
        />
      </div>

      <div className="send-money-form">
        <label htmlFor="vendor">Recipient Address:</label>
        <input
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </div>

      <div className="send-money-form">
        <label htmlFor="amount">Amount</label>
        <input type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <button className="btn" >
        Send
      </button>
    </form>
    </>
  );
};

export default SendForm;
