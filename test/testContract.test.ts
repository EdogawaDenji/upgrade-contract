import { expect } from 'chai';
import { ethers, upgrades } from 'hardhat';
import { Contract, BigNumber } from 'ethers';

describe('TestContract (proxy)', function () {
  let testContract: Contract;

  beforeEach(async function () {
    const TestContract = await ethers.getContractFactory('TestContract');
    testContract = await upgrades.deployProxy(TestContract, [10], {
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
