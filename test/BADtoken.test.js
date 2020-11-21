// test/BADtoken.test.js
// Load dependencies
const { expect } = require('chai');

// Import utilities from Test Helpers
const { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

// Load compiled artifacts
const BADtoken = artifacts.require('BADtoken');

// Start test block
contract('BADtoken', function ([ owner, other ]) {
  beforeEach(async function () {
    // Deploy a new Box contract for each test
    this.token = await BADtoken.new();
  });

  // Test case
  it('no account should be blacklisted at the start', async function () {
    expect((await this.token.isBlackListed( other )).toString()).to.equal('false');
  });

//    isBlackListed(accounts[1])


});
