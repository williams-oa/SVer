import React from "react";
// import styled from 'styled-components'
import "./payment.css";
import { BiHomeAlt } from "react-icons/bi";
import { BiCar } from "react-icons/bi";

const Payment = () => {
  return (
    <div className="payments">
      <div className="title">
        <h6>Upcoming Payments</h6>
        <h6>13 Aug 2023</h6>
      </div>
      <div className="analytic ">
        <div className="design">
          <div className="logo">
            <BiHomeAlt />
          </div>
          <div className="context">
            <h7>Home Rent</h7>
            <h6>2790BSV</h6>
          </div>
        </div>
      </div>
      <div className="analytic ">
        <div className="design">
          <div className="logo">
            <BiCar />
          </div>
          <div className="context">
            <h7>Transport</h7>
            <h6>150BSV</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
//const Section = styled.section `

//`;
