# MultiSig Wallet

[![.github/workflows/ci.yml](https://github.com/ehsomma/multisigwallet/actions/workflows/ci.yml/badge.svg)](https://github.com/ehsomma/multisigwallet/actions/workflows/multisigwallet.yml)
[![Solhint](https://img.shields.io/badge/solhint-checked-success?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAuElEQVR42o3SsQ3CMBCFYVNABTVNSjrEANQsxABIGQYGYAWGSJggsAT+H4VtZDtnCUuvsORPvjudk+RmgaXgKuglLaw3FloJbgIRToGBHbA2kE8o5YeBLfg33t9bP9UBOEd8AU7/IAEvwUGwSWWnQdToY6AOGFLZLk4vRw/BEZiAKUNj3rMT9PGS4Bgf7hWSflIJQ8M1HgRdC4VSw1Qt/IyZoXoBLGwia3MsPEP2ypXYRC2Y4+aSfwGpKaEjgWMgaAAAAABJRU5ErkJggg==)](https://github.com/ehsomma/multisigwallet/actions/workflows/ci.yml)
[![Slither](https://img.shields.io/badge/slither-checked-success?logoWidth=27&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAOCAYAAADez2d9AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB50lEQVR42qXUTYiOURQH8Hd4x8dkFsqUZCEfZTOzMVJGFrKgfIREiaxkpexslJowTYSyIqWUsCNNUzRZKdE0G0rSFMoYjFlomlH3dy3mPm/X43nHwlO3p3vPOf//Of9z7q3FGGv/tcQWrMEunMQdjGEG73APm2KMtUYQ2nEOw5gUwhchPEB3FQlW4iI+IDZZLxNeQG8R2IE3lQEhBPRjfvJdiiuYnoOkWFMYxFOMF2Q3MoePqfShlFEUQsRDnMDXEuB79OEgurEaW/EKTyLz0ll3QfYpBY5gUSbVloZMs4QxpH9S4kBkXhOZ23EVZ9CFemEYSwDPY4wtWcAKIdwXQoMsVXsarZnfYuzAcexEW4m4H53F5m4myxB6k2wzTXpxIcW14SwmSvZx7M7IWhvTmDT9PkejR3A0gUSzX18a7dzvZ7LFlGhXXmENRxLhWjzKpmwKA9hX9AUbMVmRzAA2JJ91GE3nN8tkh7A3K3lBugqtFU3vwIsS0e0Kv+vJ9qxMVsc1nMfCZi8F9uBzRVUBl7AsYfVk033rD7IE1IUfeItTWJ8qXJKma7AEfhnbsikuzn9l++m/epZl3onX/3gRhtGTxSxPkxxKfqPYXlanLFUdx1Il3xLIBB5jv+YXeBUOp9jNqFf5/QZ0yR1YZEEXfAAAAABJRU5ErkJggg==)](https://github.com/ehsomma/multisigwallet/actions/workflows/multisigwallet.yml)
[![GitHub Issues](https://img.shields.io/github/issues/ehsomma/multisigwallet)](https://github.com/ehsomma/multisigwallet/issues)
[![License](https://img.shields.io/badge/license-MIT-informational)](/LICENSE)

This project implements a "multi signature wallet" which, through an smart contract that allows the creation of a wallet defining a number of owners addresses and a number of confirmations required by these owners to be able to execute a transaction. Only if the required number of owners confirm the pending transaction, it will be executed.

## Technical features and used tools
* **Solidity**
* **Truffle**
* **Ganache-cli**
* **solhint** (linter for Solidity)
* **slither** (vulnerability analyzer)
* **Full contract documentation** (NatSpec Format)
* **Solidity coding conventions**

## Main functions of the Wallet
* Create a Wallet with a list of owners an the amount of required confirmations.
* Submit a transaction.
* Confirm the pending transaction (by the amount of required owners).
* Revoke an approved transaction.
* Execute the confirmed transaction.

> **NOTE:** For more information see code comments in [`MultiSigWallet.sol`](./contracts/MultiSigWallet.sol).