# BADtoken

## Requirements
The BADtoken is an ERC-20 token on the Ethereum Blockchain with the following properties :

* An initial total supply of 10,000,000 (with 18 fractional digits)
* A buying cost of 0.01 ETH per BAD (* Will be covered by a corresponding Crowdsale contract - see below)
* The owner can burn all tokens at any time.
* The owner can mint arbitrary amount of tokens at any time.
* The owner can transfer tokens from one address to another.
* The owner can specify and modify a list of eligible receivers. Once bought by users, tokens can be transferred only to those addresses.

## Functions
The following functions are supported (beside other additional functions of the underlying ERC-20 contract):

`function mint(address to, uint256 amount)`

Mints `amount` new token (using 18 decimals as fraction) and sends is to `address`.
Only the `owner` of the contract can execute this function.

`function burn(address to, uint256 amount)`

Burns `amount` of token (using 18 decimals as fraction).
Only the holder of the token (wallet) can execute this function.

`function blacklistUpdate(address user, bool value)`

`value = true ` adds `address` to the blacklist
`value = false ` removes `address` to the blacklist
Only the `owner` of the contract can execute this function.

`function isBlackListed(address user)`

Return the status if the given `address` is blacklisted.
Any account can execute this read-only function.

`function transfer(address recipient, uint256 amount)`

Sends `amount` of token (using 18 decimals as fraction) to `address`
Only the holder of the token (wallet) can execute this function.

The BADtoken has been deployed on the following test networks with the following addresses :

## Deployment
The BADtoken has been deployed to the following networks.

**kovan test network**
`contract : 0x...`
`owner    : 0xa31F3d5d0d8A412084a3f83D253340524F7f8897`

## Token Sale
There is no way to define a certain price for an ERC-20 token within a contract. Instead a token sale contract has to be deployed which sells these token for the price of 0.01 ETH per BAD token, equal a `rate` of 100 BADtoken / ETH
The token sale contract `TokenCrowdsaleSimple.sol` needs to be compiled and deployed separately as it uses an older Solidity compiler version (^0.5.17).
The contract needs to be deployed with the following parameters.

**constructor / deployment parameter**
rate   : number (uint256) of fractional token per wei (100 BADtoken / ETH)
wallet : receiver (address) of ETH funds
token  : token (address) to be sold for ETH

## Functions
`function buyTokens(address beneficiary)`

ETH amount sent together with transaction will be converted to BADtoken according to defined rate (100) and will be send to provided beneficiary (address).

`function buyTokens()`

ETH amount sent together with transaction will be converted to BADtoken according to defined rate (100) and will be send back to sender.
