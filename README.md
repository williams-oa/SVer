
# SVer
A webpage that allows institutions to restrict spendability of dispersed funds, and allows individuals to manage budgets.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation and usage](#installation-and-usage)
- [Backend](#backend)
- [Smart Contract](#smart-contract)
- [Contributing](#contributing)
- [License](#license)

## Overview

The project was set up to enable users to transact with funds in BSV that are restricted for specific purposes. Hence, senders can restrict spendability of disbursements to recipients, and individuals can set personal budgets through the restriction of finances. The frontend was built in react (typescript) while the backend securely stores users' data using node.js, express, and MongoDB. The smart contract that facilitates the project's functionality was built using Scrypt. 

## Features

- Smart contract: Our smart contract in Scrypt ensures that transactions are carried out without the need for an intermediary or regulatory authority
- Secure registration: Users are able to register and sign in with their data being stored securely in our MongoDB database
- Dynamic user interface: The web app's UI is inviting and easy to navigate for users, developed with users' comfort as a priority 

## Getting Started

To set up the project locally, follow the instructions below:

### Prerequisites

The following are needed before the project can be run successfully:

- Node.js
- npm or yarn

### Installation and usage

1. Clone the repository
2. Navigate to the project directory: `cd SVer`
3. In the terminal, navigate to the backend "cd sver_backend" 
4. Install dependencies: `npm install` 
5. When the installation is complete, start up the server:  `npm run start`
6. Once the server connects to the database, you should see the successful connection message in the console along with the port on which the server is running.
7.  See the instructions under the 'Smart Contract' section for instructions on how to run the smart contract
9.  From the SVer directory in the terminal, navigate to the frontend "frontend_react_tsx"
10. Install dependencies: `npm install` or `yarn install`
11. Once installation is complete, type:  `npm run start`
12. Ensure that the webapp runs on localhost:3000 

## Backend

Being a part of the MERN model, the backend uses Node.js, Express, and MongoDB. The backend was set up using the MVC architecture and enables the handling of users, vendors, and product data.

## Smart Contract

With the smart contract, we are able to program the funds' allocation by assigning categories to them. There are 2 major functions/methods that are deployed with the contract:

* AllocateFunds function: This function is used to assign a category to the fund. It takes in User's address, Balance, and category. In doing so, the user sets a tag to a certain balance, and
  
* TransferFunds function: This function is used to transfer funds from one user to the other. The sender will be prompted to enter: Sender's Wallet address, the sender's public key, desired category, the amount, and the receiver's wallet address.

 How to run:
1. Ensure you have "scrypt-ts" library installed: npm install "scrypt-ts"
2. Ensure you have all the prerequisites  installed: npm i
3. Compile the contract: npx scrypt-cli@latest compile
4. Testnet deployment: npx scrypt-cli@latest deploy
5. testnet testing: npm run testnet

The testing scenario assumes that there are 2 participants, Alice and Bob. Alice being the sender and Bob being the receiver. Alice wishes to allocate 1000 satoshis for food and she will be able to do that by activating the AllocateFunds function and specifying

Wallet address
Balance
Category

Assuming that Alice wants to use the allocated funds for Rent instead of Food, she will incur the "Not the right category" error message after activating the transfer function. This means that Alice had specified the wrong category.

On the other hand, if Alice had used the allocated funds for Food instead of Rent, she would not have incurred and error. Her transaction would have gone through successfully, and she will be able to review the transaction on test.whatsonchain.com

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

