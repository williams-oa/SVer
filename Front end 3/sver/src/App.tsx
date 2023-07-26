import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import KYCPage from './KYCPage';
import TransactionsPage from './TransactionPage';

function HomePageContent() {
  return (
    <div className="content">
      <h1>Send &amp; Receive <br /><span>Safe</span> <br /></h1>
      <p className="par">Join us on this journey to revolutionize the way we manage and utilize grants and allowances.<br />Take charge of your financial accountability today with "Saver". Together, we can make a difference. </p>
      <button className="cn"><a href="#">JOIN US</a></button>
      <div className="form">
        <input type="email" name="email" placeholder="Enter Email Here" />
        <input type="password" name="" placeholder="Enter Password Here" />
        <button className="btnn"><a href="#">Login</a></button>
        <p className="link">Don't have an account<br /><a href="#">Sign up</a> here</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="main">
        <div className="navbar">
          <div className="icon">
            <h2 className="logo">Sver</h2>
          </div>

          <div className="menu">
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
              <li><Link to="/kyc">KYC</Link></li>
              <li><Link to="/transaction">TRANSACTION</Link></li>

            </ul>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<HomePageContent />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/kyc" element={<KYCPage />} />
          <Route path="/transaction" element={<TransactionsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
