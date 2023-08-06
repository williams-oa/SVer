import React, { useState, useEffect } from 'react';
import './App.css';

import { readConfigFile } from 'typescript';
readConfigFile



import './dashboard.css';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

interface DashboardProps {
  loggedInUser: {
    id: string;
    name: string;
  };
}

const Dashboard: React.FC<DashboardProps> = ({ loggedInUser }) => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // This is a way to fetch user's balance and transaction history from the server I am not sure if it works yet.
    fetch(`/api/balance/${loggedInUser.id}`)
      .then((response) => response.json())
      .then((data) => {
        setBalance(data.balance);
      })
      .catch((error) => {
        console.error('Error fetching balance:', error);
      });

    fetch('/api/transactions')
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data.transactions);
      })
      .catch((error) => {
        console.error('Error fetching transactions:', error);
      });

    // Fetch list of vendors from the server
    fetch('/api/vendors')
      .then((response) => response.json())
      .then((data) => {
        setVendors(data.vendors);
      })
      .catch((error) => {
        console.error('Error fetching vendors:', error);
      });
  }, [loggedInUser]);

  // Function to handle vendor search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Make API call to search vendors based on the query

    //After that, update the vendor list accordingly 
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome, {loggedInUser.name}</h2>

      <div className="balance-section">
        <h3>Account Balance</h3>
        <p>{balance} BSV</p>
      </div>

      <div className="transaction-history-section">
        <h3>Transaction History</h3>
        <GridComponent dataSource={transactions} height={200}>
          <ColumnsDirective>
            <ColumnDirective field="date" headerText="Date" width="150" textAlign="Right" />
            <ColumnDirective field="description" headerText="Description" width="200" />
            <ColumnDirective field="amount" headerText="Amount" width="100" textAlign="Right" format="C2" />
          </ColumnsDirective>
        </GridComponent>
      </div>

      <div className="vendor-list-section">
        <h3>List of Vendors</h3>
        <ul>
          {/* {vendors.map((vendor, index) => ( */}
             {/* <li key={index}>{vendor.name}</li> */}
          {/* ))} */}
        </ul>
      </div>

      <div className="vendor-search-section">
        <input
          type="text"
          placeholder="Search Vendors"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <ButtonComponent>Search</ButtonComponent>
      </div>
    </div>
  );
};

export default Dashboard

