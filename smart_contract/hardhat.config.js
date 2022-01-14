// https://eth-ropsten.alchemyapi.io/v2/BpbZG8QQ0FIG4E_JR2Gs_hftq-aRR9EE

require("@nomiclabs/hardhat-waffle");

const ALCHEMY_URL =
  "https://eth-ropsten.alchemyapi.io/v2/BpbZG8QQ0FIG4E_JR2Gs_hftq-aRR9EE";
const PRIVATE_KEY =
  "b2d293959949ca8b4a3ab2c7b0141de9d5d597b0814124f4e675a2fcbf7b7f4b";

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: ALCHEMY_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
