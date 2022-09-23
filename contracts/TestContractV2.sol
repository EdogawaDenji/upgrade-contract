// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

import "./TestContract.sol";

contract TestContractV2 is TestContract {
    function increment() public {
        store(getValue() + 1);
    }
}
