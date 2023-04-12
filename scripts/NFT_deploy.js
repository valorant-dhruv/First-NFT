const { ethers } = require("hardhat");

async function main() {
  let MYNFT = await ethers.getContractFactory("First_NFT");
  let nft = await MYNFT.deploy();

  // let balance = await nft.returnbalance(
  //   "0xC8138cC1e2f9De728562D1C886bD0Ce5063de1f7"
  // );

  // console.log(typeof balance);
  // console.log(balance);

  // let balance3 = balance.value;
  // let balance2 = await nft.Foo();

  // console.log(balance3.toNumber());
  // console.log(typeof balance3);
  // console.log(balance2);

  // await nft.deployed();

  console.log(
    "The smart contract is now deployed at the address:",
    nft.address
  );
}

// 0xC8138cC1e2f9De728562D1C886bD0Ce5063de1f7- This is the address of the deployed smart contract for the NFT

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
