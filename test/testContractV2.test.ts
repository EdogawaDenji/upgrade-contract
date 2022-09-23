import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Contract, BigNumber } from 'ethers';

describe('TestContract V2', function () {
  let testContractV2: Contract;

  beforeEach(async function () {
    const TestContractV2 = await ethers.getContractFactory('TestContractV2');
    testContractV2 = await TestContractV2.deploy();
    await testContractV2.deployed();
  });

  it('should retrieve value previously stored', async function () {
    await testContractV2.store(42);
    expect(await testContractV2.getValue()).to.equal(BigNumber.from('42'));

    await testContractV2.store(100);
    expect(await testContractV2.getValue()).to.equal(BigNumber.from('100'));
  });

  it('should increment value correctly', async function () {
    await testContractV2.store(42);
    await testContractV2.increment();
    expect(await testContractV2.getValue()).to.equal(BigNumber.from('43'));
  });
});
