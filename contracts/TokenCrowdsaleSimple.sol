pragma solidity ^0.5.17;

// https://docs.openzeppelin.com/contracts/2.x/crowdsales

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v2.5.1/contracts/crowdsale/Crowdsale.sol";

/*
	constructor / deployment parameter
	rate   : number (uint256) of fractional token per wei
	wallet : receiver (address) of ETH funds
	token  : token (address) to be solf for ETH

	function buyTokens(address beneficiary)
	ETH amount sent with transaction will be converted of token amount according to rate
	token will be send to provided beneficiary (address)
*/

contract TokenCrowdsaleSimple is Crowdsale {
    constructor(
        uint256 rate,
        address payable wallet,
        IERC20 token
    )
        Crowdsale(rate, wallet, token)
        public
    {
        // nothing more to do
    }


    function buyTokens() public nonReentrant payable {
        buyTokens(msg.sender);
    }
}
