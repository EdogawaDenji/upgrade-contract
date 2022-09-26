import { expect } from 'chai';
import { ethers, upgrades } from 'hardhat';
import { Contract, BigNumber } from 'ethers';

describe('Box (proxy)', function () {
  let testContract: Contract;

  beforeEach(async function () {
    const Box = await ethers.getContractFactory('TestContract');
    testContract = await upgrades.deployProxy(Box, [10], {
      initializer: 'store'
    });
  });

  it('should retrieve value previously stored', async function () {
    expect(await testContract.getValue()).to.equal(BigNumber.from('10'));

    await testContract.store(100);
    const result = await testContract.getValue();
    console.log('result', result);
    expect(await testContract.getValue()).to.equal(BigNumber.from('100'));
  });
});
