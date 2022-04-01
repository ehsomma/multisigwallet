//#region Imports

// Contracts.
const MultiSigWallet = artifacts.require("MultiSigWallet");
const TestContract = artifacts.require("TestContract");

// Chai.
const { chai, expect, BN } = require("./setup-chai.js");

// Truffle assertions.
const truffleAssert = require('truffle-assertions');

// OpenZeppeling test helpers.
const {
    //BN,           // Big Number support.
    constants,      // Common constants, like the zero address and largest integers.
    expectEvent,    // Assertions for emitted events.
    expectRevert,   // Assertions for transactions that should fail.
    time,           // Block time manipulation.
} = require('@openzeppelin/test-helpers');

//#endregion

contract("multisigwallet test", async accounts => {
    //#region Declarations.

    let multiSigWalletInstance;
    let testContractInstance;
    let testFunctionData;

    //#endregion

    //#region Hooks.

    // Runs once before the first test in this block.
    before(async function () {
        multiSigWalletInstance = await MultiSigWallet.deployed();
        testContractInstance = await TestContract.deployed();

        testFunctionData = await testContractInstance.getData();

        console.log('MultiSigWallet address: ', multiSigWalletInstance.address);
        console.log('testFunctionData: ', testFunctionData);
        console.log('accounts[0]', accounts[0]);
        console.log('accounts[1]', accounts[1]);
        console.log('accounts[1]', accounts[2]);
        console.log();
    });

    //#endregion

    //#region Tests

    it("with 2 confirmations from any of the 3 owners you should be able to execute a transaction", async function () {
        // Arrange.
        const expectedResult = new BN(10);

        // Act.
        // Step 1: Submits the transaction to confirm and execute.
        await multiSigWalletInstance.submitTransaction(
            testContractInstance.address, 
            0, 
            testFunctionData, 
            { from: accounts[0], gas: 3000000 });

        // Get the last tx index.
        let txIndex = await multiSigWalletInstance.getTransactionCount();
        txIndex = txIndex.sub(new BN(1));

        // Step 2: Confirms the transaction from the owner 1 (index 0).
        await multiSigWalletInstance.confirmTransaction(txIndex, {from: accounts[0]});
        
        // Step 3: Confirms the transaction from the owner 2 (index 1).
        await multiSigWalletInstance.confirmTransaction(txIndex, {from: accounts[1]});

        // Step 4: Executes the transaction. 
        await multiSigWalletInstance.executeTransaction(txIndex, {from: accounts[0], gas: 3000000 })

        time.advanceBlock();

        const result = await testContractInstance.value();
        const tx = await multiSigWalletInstance.getTransaction(0);
        
        // Assert.
        expect(result).to.be.bignumber.equal(expectedResult);
        expect(tx.executed).to.be.equal(true);
    });

    //#endregion
});
