import React from 'react';

const KYCPage = () => {
  return (
    <div style={styles.pageContent}>
      <h1 style={styles.pageHeading}>KYC Page</h1>
      {/* Add your content for the KYC page */}
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
};

export default KYCPage;
