const Cosmetics = artifacts.require("Cosmetics");

module.exports = function (deployer) {
  deployer.deploy(Cosmetics);
};
