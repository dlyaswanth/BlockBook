
# Blockbook

This application operates on a blockchain-based social network where users can generate posts or ideas, as well as interact with them through likes and comments.


## Installation

To run this application in local

#### Web3

First download the truffle package globally in the system, to do so run this command 

```bash 
  npm install truffle -g
```

Then Install Ganache (Single node local Ethereum network): 
To download click on this [Truffle Suite](https://archive.trufflesuite.com/ganache/)

#### Metamask Configuration
After Installation of Truffle
- Launch Truffle and initiate a fresh workspace for Ethereum.
- Following workspace setup, extract the PRIVATE KEY of a designated test account.
- Access Metamask and navigate to the accounts section, then select the option to add a new account.
- Opt for the import account feature and paste the previously copied PRIVATE KEY.
- After successful import, access the network selection menu.
- Choose to reveal test network options and designate localhost.
- Your account should now be endowed with 100 ETH allocated for development endeavors.




#### Complication 
Run these commands to create and migrate the smart contracts 
```bash
  truffle compile
  truffle migrate 
```


#### Creation of Smartcontracts
To create a new contract , try these command 

```bash
truffle create contract {contractName}
```

#### To start the Application


```bash
npm install
npm run build 
npm run start 
```

Click on this link [localhost](http://localhost:3000/) to view the application
## Authors

- [@Yaswanth L](https://github.com/dlyaswanth)


## Tech Stack

**Client:** React, React Bootstrap

**Server:** Node, Solidity


## Screenshots

![App Screenshot](https://asset.cloudinary.com/dlyaswanth/e42ba93dca9dda159a830f91f88c9339?text=App+Screenshot+Here)

