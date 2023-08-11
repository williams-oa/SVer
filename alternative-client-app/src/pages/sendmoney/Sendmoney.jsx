import React from "react";
import "./sendmoney.css";
import { vendors } from "../../data";

function Sendmoney() {
  return (
    <div>
      <div className="sendmoney">
        <div className="sendmoney_dash_wrapper">
          {vendors.map(({ id, icon, title, desc }) => {
            return (
              <div className="sendmoney_value" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
              </div>
            );
          })}
          <br />
        </div>
      </div>

      <form className="sendmoneynow">
        <div className="form-item">
          <label htmlFor="address">Address</label>
          <input type="text" />
        </div>

        <div className="form-item">
          <label htmlFor="amount">Amount</label>
          <input type="number" />
        </div>
        <button className="btn">Send</button>
      </form>
    </div>
  );
}

export default Sendmoney;
