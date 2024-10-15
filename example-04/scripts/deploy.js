
// deploy contract
const { deploy } = require("@nomicfoundation/hardhat-ignition");
const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    const sampleToken = await ethers.getContractFactory("SampleToken");
    const token = await sampleToken.deploy("SampleToken", "ST");
    console.log("Token address:", await token.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
// npx hardhat run scripts/deploy.js --network sepolia