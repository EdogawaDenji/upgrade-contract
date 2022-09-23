import { expect } from 'chai';
import { BigNumber, Contract } from 'ethers';
import { ethers, upgrades } from 'hardhat';

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

    const result2 = await testContract.getValue();
    console.log(result2);
    // expect(await testContract.getValue()).to.equal(BigNumber.from('100'));
  });
});
