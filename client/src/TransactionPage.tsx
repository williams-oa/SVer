import React from 'react';

const TransactionPage = () => {
  return (
    <div style={styles.pageContent}>
      <h1 style={styles.pageHeading}>Transaction</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={styles.formGroup}>
          <label htmlFor="category" style={styles.label}>Category</label>
          <select id="category" style={styles.select}>
            <option value="food">Food</option>
            <option value="entertainment">Entertainment</option>
            <option value="clothing">Clothing</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="amount" style={styles.label}>Amount</label>
          <input type="text" id="amount" placeholder="Enter Amount" style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="receiver" style={styles.label}>Vendor Address</label>
          <input type="text" id="receiver" placeholder="Enter Vendor's Wallet Address" style={styles.receiverInput} />
        </div>
        <button style={styles.button}>Send</button>
      </div>
    </div>
  );
};

const styles = {
  pageContent: {
    padding: '20px',
  },
  pageHeading: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#ff7200',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
    marginTop: '10px',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#ff7200',
  },
  select: {
    border: '1px solid #cccccc',
    padding: '10px',
    fontSize: '16px',
    color: '#333333',
    marginLeft: '20px',
    width: 'calc(100% - 40px)',
    marginTop: '5px',
  },
  input: {
    border: '1px solid #cccccc',
    padding: '10px',
    fontSize: '16px',
    color: '#333333',
    marginLeft: '20px',
    width: 'calc(100% - 40px)',
    marginTop: '5px',
  },
  senderInput: {
    border: '1px solid #cccccc',
    padding: '10px',
    fontSize: '16px',
    color: '#333333',
    marginLeft: '20px',
    width: 'calc(100% - 40px)',
    marginTop: '5px',
  },
  receiverInput: {
    border: '1px solid #cccccc',
    padding: '10px',
    fontSize: '16px',
    color: '#333333',
    marginLeft: '20px',
    width: 'calc(100% - 40px)',
    marginTop: '5px',
  },
  button: {
    backgroundColor: '#ff7200',
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default TransactionPage;
