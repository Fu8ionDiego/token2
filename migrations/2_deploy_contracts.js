var myTokenV1 = artifacts.require("./MyTokenV1.sol");

module.exports = function(deployer) {
    deployer.deploy(myTokenV1);
}