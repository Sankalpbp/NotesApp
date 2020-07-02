'use strict'

const fs = require('fs');
const chalk = require('chalk');


const getNotes = () => {
    return "Your notes...";
};

const loadNotes = () => {

    try {
        // get the JSON in a buffer(in the form of bytes)
        const dataBuffer = fs.readFileSync('notes.json');
        // convert the buffer bytes to string
        const dataJSON = dataBuffer.toString();
        // parsing the JSON data to a JS object
        let JSObjectArray = JSON.parse(dataJSON);
        return JSObjectArray;
    } catch (error) {
        // return an empty JS array
        return [];
    }
};

const addNote = (title, body) => {
    // get the array of JS objects
    const notes = loadNotes();

    const duplicateNote = notes.find((note) => note.title == title);
    
    if (duplicateNote === undefined) {
        notes.push({
            title: title,
            body: body
        });
    
        saveNotes(notes);    
        console.log(chalk.green.inverse('New note added.'));
    } else {
        console.log(chalk.red.inverse('Note title taken.'));
    }
};

const saveNotes = (notes) => {

    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const removeNote = (title) => {

    const notes = loadNotes();
    
    const notestoKeep = notes.filter((note) => (note.title !== title));

    if (notestoKeep.length === notes.length) {
        console.log(chalk.bold.red.inverse('No note removed!'));
    } else {
        console.log(chalk.bold.green.inverse('Note removed!'));        
        saveNotes(notestoKeep);
    }
};

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.blue.bold('Your notes...'));

    notes.forEach((note) => {
        console.log(note.title);
    });
};

const readNote = (title) => {
    const notes = loadNotes();

    const noteToRead = notes.find((note) => {
        return note.title === title;
    });

    if (noteToRead === undefined) {
        console.log(chalk.red.bold.inverse('No Note found.'));
    } else {
        console.log('Title: ' + chalk.green.inverse(noteToRead.title));
        console.log('Body: ' + noteToRead.body);
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};