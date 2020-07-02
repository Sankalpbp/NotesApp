 'use strict'

const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

yargs.version('1.1.0');

// we will create different commands corresponding to 
// the argument that is passed

// create an add command
yargs.command({
    command: 'add',
    description: 'Add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string' 
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// create a remove command
yargs.command({
    command: 'remove',
    description: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title);
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
    handler: function (argv) {
        console.log('Reading the note.');
    }
});

yargs.parse();