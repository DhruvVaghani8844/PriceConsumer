require("@nomicfoundation/hardhat-toolbox");

//require("@nomiclabs/hardhat-ethers")
 require('dotenv').config()

 const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || 
"https://eth-goerli.g.alchemy.com/v2/poKeeDMhrDfoIPRkw53-KR_rC2h5uPxT"
 const PRIVATE_KEY = process.env.PRIVATE_KEY || "abcdef"

 module.exports = {
     defaultNetwork: "goerli",
     networks: {
         hardhat: {
             // // If you want to do some forking, uncomment this
             // forking: {
             // url: MAINNET_RPC_URL
             // }
         },
         localhost: {
         },
         goerli: {
             url: GOERLI_RPC_URL,
             accounts: [PRIVATE_KEY],
             saveDeployments: true,
         },
     },

  solidity: "0.8.7",
};