// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SVer{
    mapping(address => mapping(string => uint256)) public allocations;

    function allocateFunds(string memory category) external payable {
        require(msg.value > 0, "Amount must be greater than 0");
        allocations[msg.sender][category] += msg.value;
    }

    function transfer(address recipient, string memory category) external payable {
        address payable _recipient = payable(recipient);
        //address payable _sender = payable(msg.sender);
        require(allocations[msg.sender][category] >= msg.value, "Not sufficient balance");
        _recipient.transfer(msg.value);
        allocations[msg.sender][category] -= msg.value;
        allocations[recipient][category] += msg.value;
    }

    function categorybalance(string memory category) external view returns (uint){
        uint256 _wei = allocations[msg.sender][category];
        return _wei/1000000000000000000;
    }

}