'use strict'

const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => {
    return "Your notes...";
}

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
}

const addNote = (title, body) => {
    // get the array of JS objects
    const notes = loadNotes();

    const duplicateNotes = notes.filter((note) => (note.title === title));

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
    
        saveNotes(notes);    
        console.log(chalk.green.inverse('New note added.'));
    } else {
        console.log(chalk.red.inverse('Note title taken.'));
    }
}

const saveNotes = (notes) => {

    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const removeNote = (title) => {

    const notes = loadNotes(title);
    
    const notestoKeep = notes.filter((note) => (note.title !== title));

    if (notestoKeep.length === notes.length) {
        console.log(chalk.bold.red.inverse('No note removed!'));
    } else {
        console.log(chalk.bold.green.inverse('Note removed!'));        
        saveNotes(notestoKeep);
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};