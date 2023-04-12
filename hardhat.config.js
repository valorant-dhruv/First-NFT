require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "rinkeby",
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_URL,
      accounts: [`0x${process.env.METAMASK_PRIVATE_KEY}`],
    },
  },
};
