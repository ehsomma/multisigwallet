const MultiSigWallet = artifacts.require("MultiSigWallet");

module.exports = async function(deployer, network, accounts) {
  if (network === "main") {
    return
  }

  console.log("-----------------------------")
  console.log(accounts)
  console.log("-----------------------------")

  const owners = await accounts.slice(0, 3);
  const numConfirmationsRequired = 2;

  await deployer.deploy(MultiSigWallet, owners, numConfirmationsRequired)
}