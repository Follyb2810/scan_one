

//! creator
// 0x2b13242c9Aa37B635d811832A2101cA760228AD0

//? 0x2b13242c9Aa37B635d811832A2101cA760228AD0

base
//? 0x8416E6a5db30F4b4BEd8fa1C9654c7e160245584
// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GoofyGoober is ERC20 {
    uint constant _initial_supply = 30_000_000 * 10 ** decimals();
    // uint constant _initial_supply = 100 * (10**18);

    constructor() ERC20("GoofyGoober", "GG") {
        _mint(msg.sender, _initial_supply);
    }
}


// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GoofyGoober is ERC20 {
    uint constant _initial_supply = 100 * (10**18);

    constructor() ERC20("GoofyGoober", "GG") {
        _mint(msg.sender, _initial_supply);
    }
}


// SPDX-License-Identifier: Unlicense
pragma solidity 0.8.26;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol"; 

contract Follyb is ERC20 {
    uint256 constant _initial_supply = 30_000_000 * 10 ** 18;

    constructor() ERC20("Folly", "FOLLY") {
        _mint(msg.sender, _initial_supply);
    }
}

//? work
// SPDX-License-Identifier: Unlicense
pragma solidity 0.8.26;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol"; 

contract Follyb is ERC20 {
    uint256 constant _initial_supply = 30_000_000 * 10 ** 18;

    constructor() ERC20("Folly", "FOLLY") {
        _mint(msg.sender, _initial_supply);
    }
}

// SPDX-License-Identifier: Unlicense
pragma solidity 0.8.26;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol"; 

contract Follyb is ERC20 {
    uint256 constant _initial_supply = 30_000_000 * 10 ** 18;
    address public owner;

    constructor() ERC20("Folly", "FOLLY") {
        owner = msg.sender;
        _mint(owner, _initial_supply);
    }

    // Function to return the balance of the contract owner
    function getOwnerBalance() external view returns (uint256) {
        return balanceOf(owner);
    }
}


