const BADtoken = artifacts.require("BADtoken");

module.exports = function (deployer) {
  deployer.deploy(BADtoken);
};
