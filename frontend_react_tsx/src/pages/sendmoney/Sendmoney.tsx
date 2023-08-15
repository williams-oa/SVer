import React, { useState } from "react";
import "./sendmoney.css";
import { vendors } from "../../data";
import Sidebar from "../dashboard/Sidebar";

const Sendmoney = () => {
  const [selectedVendor, setSelectedVendor] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");

  const handleVendorClick = (
    title: string,
    category: string,
    address: string
  ) => {
    setSelectedVendor(title);
    setSelectedCategory(category);
    setSelectedAddress(address);
  };

  return (
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
        <div className="form-item">
          <label htmlFor="vendor">Recipient:</label>
          <input type="text" value={selectedVendor || ""} />
        </div>

        <div className="form-item">
          <label htmlFor="category">Category:</label>
          <input type="text" value={selectedCategory || ""} />
        </div>

        <div className="form-item">
          <label htmlFor="address">Address</label>
          <input type="text" value={selectedAddress || ""} />
        </div>

        <div className="form-item">
          <label htmlFor="amount">Amount</label>
          <input type="number" />
        </div>

        <button className="btn">Send</button>
      </form>
    </div>
  );
};

export default Sendmoney;
