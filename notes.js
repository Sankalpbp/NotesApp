'use strict'

const fs = require('fs');
const getNotes = function () {
    return "Your notes...";
}

const addNote = function (title, body) {
    // get the array of JS objects
    const notes = loadNotes();

    const duplicateNotes = notes.filter(function (note) {
        return (note.title === title);
    });

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
    
        saveNotes(notes);    
        console.log('New note added.');
    } else {
        console.log('Note title taken.');
    }
}

const saveNotes = function (notes) {

    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function () {

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

module.exports = {
    getNotes: getNotes,
    addNote: addNote
};