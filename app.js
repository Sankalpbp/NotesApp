 'use strict'

const getNotes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

yargs.version('1.1.0');

// we will create different commands corresponding to 
// the argument that is passed

// create an add command
yargs.command({
    command: 'add',
    description: 'Add a note',
    handler: function() {
        console.log('Adding a note...');
    }
});

// create a remove command
yargs.command({
    command: 'remove',
    description: 'Remove a note',
    handler: function () {
        console.log('Removing a note...');
    }
});

// create a list command
yargs.command({
    command: 'list',
    description: 'List the notes',
    handler: function () {
        console.log('Listing the notes...');
    }
});

// create a read command
yargs.command({
    command: 'read',
    description: 'Read the note.',
    handler: function () {
        console.log('Reading the note.');
    }
});

console.log(yargs.argv);