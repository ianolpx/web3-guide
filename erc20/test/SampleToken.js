const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");


async function main() {
  const [deployer, addr1, addr2, ...addrs] = await ethers.getSigners();
  const SampleToken = await ethers.deployContract("SampleToken", ["SampleToken", "ST"]);
  await SampleToken.waitForDeployment();
  console.log("SampleToken deployed to:", await SampleToken.getAddress());
  console.log("deployer address:", await deployer.getAddress());
  const balance = await SampleToken.balanceOf(await deployer.getAddress());
  console.log("deployer balance:", balance.toString());
}

main();
