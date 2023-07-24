import React from 'react';

const AboutPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>Welcome to Saver, a revolutionary web app that is transforming the way we manage and utilize grants and allowances. Our mission is to provide a transparent and accountable platform that ensures the efficient allocation of resources while promoting financial responsibility and control.</p>
      <br />

      <h2 style={styles.subHeading}>Our Services</h2>
      <p style={styles.paragraph}>At Saver, we offer a range of services designed to empower both institutions and individuals in their financial management:</p>
      <br />

      <h2 style={styles.subHeading}>Grant Distribution and Accountability</h2>
      <p style={styles.paragraph}>Our unique twist to grant distribution allows organizations to distribute grants in Bitcoin SV (BSV), programmable to restrict spendability. This ensures that allocated funds are used for their intended purposes, addressing the challenge of misappropriation and moral hazards. With our transparent and secure blockchain technology, every transaction can be traced and verified.</p>
      <br />

      <h2 style={styles.subHeading}>Budgeting and Expense Tracking</h2>
      <p style={styles.paragraph}>Saver goes beyond traditional budgeting apps by not only tracking spending but also restricting payments beyond set limits and categories. Our app provides a tangible method for managing budgets, helping individuals and institutions stay on track with their financial goals. With real-time expense tracking, users can make informed financial decisions and take control of their spending habits.</p>
      <br />

      <h2 style={styles.subHeading}>Direct and Transparent Transactions</h2>
      <p style={styles.paragraph}>Through our platform, Saver connects vendors directly with consumers, creating a new ecosystem of commerce. Users can spend their allocated funds with registered vendors, ensuring transparency and eliminating the need to leave the app for transactions. This not only streamlines the process but also opens up opportunities for vendors to tap into a targeted market, creating a win-win situation for universities, vendors, and students.</p>
      <br />

      <h2 style={styles.subHeading}>Our Commitment to Privacy and Compliance</h2>
      <p style={styles.paragraph}>At Saver, we understand the importance of data protection and privacy. We adhere to robust laws and regulations, including the EU General Data Protection Regulation (GDPR), to ensure the secure handling of personal information. We prioritize the confidentiality and integrity of user data, implementing stringent security measures to safeguard against unauthorized access or misuse.</p>
      <br />
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#ff7200',
  },
  subHeading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#ff7200',
  },
  subSubHeading: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#333333',
  },
  paragraph: {
    color: '#fff',
  },
};

export default AboutPage;
