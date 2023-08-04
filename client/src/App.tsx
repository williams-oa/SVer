import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
//import ContactPage from './ContactPage';
import KYCPage from './KYCPage';
import TransactionsPage from './TransactionPage';
import UsersData from './users';
import LoginPage from './LoginPage';

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
              <li><Link to="/login">REGISTER</Link></li>
              <li><Link to="/users">USERS</Link></li>
              <li><Link to="/kyc">KYC</Link></li>
              <li><Link to="/transaction">TRANSACTION</Link></li>

            </ul>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersData />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/kyc" element={<KYCPage />} />
          <Route path="/transaction" element={<TransactionsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
