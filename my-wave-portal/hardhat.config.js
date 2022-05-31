require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/hlCl5138sPkKYiSNNuVa1FCPqwY2p2bB", //API url from alchemy dashboard
      accounts: ["e65e666jh9e3da6dd451b8a6178ed8b499de8f2d1d1fd24aaf91d1eac2a327f3"] //remove the key. it's the official one
    },
  },
};

/*
Deploying contracts with account:  0xC7B337aa3257e74C764D247a3A5e56de44Dfc47E
Account balance:  100000000000000000
WavePortal address:  0x6256faf8872feBD8Eed3eb7991DbAe358c5889c7
*/
