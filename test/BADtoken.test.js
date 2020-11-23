// test/BADtoken.test.js
// Load dependencies
const { expect } = require('chai');

// Import utilities from Test Helpers
const { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

// Load compiled artifacts
const BADtoken = artifacts.require('BADtoken');

// Start test block
contract('BADtoken', function ([ owner, other ]) {
  // Deploy a new contract
  before(async function () {
    this.token = await BADtoken.new();
  });

  const decimalZeros = '0'.repeat(18);

  // Test case 1
  it('totalSupply should be 10,000,000 token', async function () {
    expect((await this.token.totalSupply()).toString()).to.equal('10'+'000'+'000'+decimalZeros);
  });

  // Test case 2
  it('owner should have 10,000,000 token', async function () {
    expect((await this.token.balanceOf(owner)).toString()).to.equal('10'+'000'+'000'+decimalZeros);
  });

    // Test case 3
    it('account owner can burn his token', async function () {
      const burnAmount = new BN('2'+'000'+'000'+decimalZeros);
      console.log("burning     =  ", burnAmount.toString());
      await this.token.burn(burnAmount, { from: owner });
      const balance_new = new BN(await this.token.balanceOf(owner));
      console.log("balance_new =  ", balance_new.toString());
      expect((await this.token.balanceOf(owner)).toString()).to.equal('8'+'000'+'000'+decimalZeros);
    });

  // Test case 3
  /*
  it('account owner can burn his token', async function () {
    const burnAmount = new BN('2'+'000'+'000'+decimalZeros);
    const balance    = new BN(await this.token.balanceOf(owner));
    const balance_expect = new BN(balance - burnAmount);
    console.log("balance     = ", balance.toString());
    console.log("burning     =  ", burnAmount.toString());
    await this.token.burn(burnAmount, { from: owner });
    const balance_new = new BN(await this.token.balanceOf(owner));
    console.log("balance_new =  ", balance_new.toString());
    expect(balance_new).to.equal(balance_expect);
  });
  */

  // Test case 4
  it('no account should be blacklisted at the start', async function () {
    expect((await this.token.isBlackListed( other )).toString()).to.equal('false');
  });

  // Test case 5
  it('owner can transfer token to other account', async function () {
    const amount = new BN('3'+'000'+'000'+decimalZeros);
    const result = await this.token.transfer(other, amount, { from: owner });
    expect(result.receipt.status.toString()).to.equal('true');
    expect((await this.token.balanceOf(other)).toString()).to.equal('3'+'000'+'000'+decimalZeros);
  });

  // Test case 6
  it('blacklist other account', async function () {
    await this.token.blacklistUpdate(other, true);
    expect((await this.token.isBlackListed(other)).toString()).to.equal('true');
  });

  // Test case 7
  it('transfer token to blacklisted other account should fail', async function () {
    const amount = new BN('3'+'000'+'000'+decimalZeros);

    await expectRevert.unspecified(
      this.token.transfer(other, amount, { from: owner })
      // ,"Token transfer refused. Recipient is on blacklist"
    );

    expect((await this.token.balanceOf(other)).toString()).to.equal('3'+'000'+'000'+decimalZeros);
  });


});
