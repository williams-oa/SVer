import React, { useState } from "react";
import "./sendmoney.css";
import { vendors } from "../../data";
import Sidebar from "../dashboard/Sidebar";

const Sendmoney = () => {
  const [selectedVendor, setSelectedVendor] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [fromAddress, setFromAddress] = useState("");
  const [transactionSuccess, setTransactionSuccess] = useState(false);

  const handleVendorClick = (
    title: string,
    category: string,
    address: string
  ) => {
    setSelectedVendor(title);
    setSelectedCategory(category);
    setSelectedAddress(address);
  };

  const handleSendClick = () => {
    setTransactionSuccess(true);
    const redirectUrl = `https://test.whatsonchain.com/tx/${encodeURIComponent(
      fromAddress
    )}`;
    setTimeout(() => {
      window.location.href = redirectUrl;
    }, 2000);
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
