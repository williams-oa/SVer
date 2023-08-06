import React from "react";
import "./SignUp.css";

function SignUp() {
  return (
    <>
      <form className="KYC" action="">
        {" "}
        <h2>Please fill out your details below:</h2>
        <br />
        <div className="form-item">
          <label htmlFor="theinput"> Name:</label>
          <input className="name" type="text" />
        </div>
        <div className="form-item">
          <label htmlFor="theinput"> Email:</label>
          <input className="name" type="text" />
        </div>
        <div className="form-item">
          <label htmlFor="theinput"> ID Type:</label>
          <input className="name" type="text" />
        </div>
        <div className="form-item">
          <label htmlFor="theinput"> ID Number:</label>
          <input className="name" type="text" />
        </div>
        <div className="form-item">
          <label htmlFor="theinput"> User Type:</label>
          <input className="name" type="text" />
        </div>
        <button className="btn">Submit</button>
      </form>
    </>
  );
}

export default SignUp;
