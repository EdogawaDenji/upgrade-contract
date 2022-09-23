import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import '@openzeppelin/hardhat-upgrades';

const ALCHEMY_KEY = 'D112yu0JU4wBXBy2PEHCNtujm7jG1adR';
const ACCOUNT_PRIVATE_KEY =
  'b677a03e96dd4ae81f2666b26f98d767a0815c093b4d17980f450495a9574c12';
const config: HardhatUserConfig = {
  solidity: '0.8.17',
  defaultNetwork: 'goerli',
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_KEY}`,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    }
  }
};

export default config;
