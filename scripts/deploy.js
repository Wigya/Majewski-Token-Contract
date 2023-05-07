const hre = require("hardhat");

async function main() {
  const MajewskiToken = await hre.ethers.getContractFactory("MajewskiToken");
  const majewskiToken = await MajewskiToken.deploy(100000000, 50);

  await majewskiToken.deployed();

  console.log("Majeski Token deployed: ", majewskiToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
