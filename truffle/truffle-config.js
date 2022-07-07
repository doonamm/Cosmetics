require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    rinkeby: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, process.env.INFURA_PROVIDER),
      network_id: 4,       
      gas: 5500000,       
      confirmations: 2,    
      timeoutBlocks: 200, 
      skipDryRun: true 
    },
  },
  mocha: {
    // timeout: 100000
  },
  compilers: {
    solc: {
      version: "0.8.11",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};
