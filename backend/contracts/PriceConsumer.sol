// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;


contract PriceConsumerV3 {

   
     function updatePrice() public payable {
        require(msg.value > 0, "Please pay greater than 0 ether");
        // owner.transfer(msg.value);//
    }
}