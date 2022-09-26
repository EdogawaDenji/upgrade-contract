// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "./TestContract.sol";

contract TestContractV2 is TestContract {
    function increment() public {
        store(getValue() + 1);
    }
}
