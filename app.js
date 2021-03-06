 'use strict'

const notes = require('./notes.js');
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
    handler(argv) {
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
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

// create a list command
yargs.command({
    command: 'list',
    description: 'List the notes',
    handler() {
        notes.listNotes();
    }
});

// create a read command
yargs.command({
    command: 'read',
    description: 'Read the note.',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});

yargs.parse();