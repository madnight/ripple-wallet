'use strict'
const chalk = require('chalk')
const RippleAPI = require('ripple-lib').RippleAPI

console.log(chalk.green('-----------------------------------------------'))
console.log(chalk.green('Ripple Wallet'), chalk.yellow('Generate Wallet'))
console.log(chalk.green('-----------------------------------------------'), "\n")

const api = new RippleAPI()
const account = api.generateAddress()

console.log('  Public address:', chalk.yellow(account.address))
console.log('  Wallet secret:', chalk.yellow(account.secret), "\n")

console.log(chalk.red('  Print this wallet and make sure to store it somewhere safe!'), "\n")