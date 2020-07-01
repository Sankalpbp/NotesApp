 'use strict'

const validator = require('validator');
const fs = require('fs');
const getNotes = require('./notes.js');
const chalk = require('chalk');

console.log(getNotes());
console.log(chalk.green('Success'));
console.log(chalk.bold.red('Hey guys, how you doing'));

