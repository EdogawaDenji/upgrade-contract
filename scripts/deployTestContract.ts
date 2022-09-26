import { ethers, upgrades } from 'hardhat';
async function main() {
  const TestContract = await ethers.getContractFactory('TestContract');

  const testContract = await upgrades.deployProxy(TestContract, [10], {
    initializer: 'store'
  });

  console.log(testContract.address, ' testContract(proxy) address');

  console.log(
    await upgrades.erc1967.getImplementationAddress(testContract.address),
    ' getImplementationAddress'
  );
  console.log(
    await upgrades.erc1967.getAdminAddress(testContract.address),
    ' getAdminAddress'
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
