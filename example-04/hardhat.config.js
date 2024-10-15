require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_INFURA_URL = process.env.SEPOLIA_INFURA_URL;
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY?.toString() || "";

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: SEPOLIA_INFURA_URL || "https://dummy.url.com",
      accounts: [SEPOLIA_PRIVATE_KEY || "0x1234567890123456789012345678901234567890123456789012345678901234"],
    },
  },
};
