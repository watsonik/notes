const fs = require('fs');
const path = require('path');
const notePath = path.resolve(__dirname, '..', 'data', 'notes.json');

var notes = fetchData();

function fetchData() {
    fs.existsSync(notePath) || fs.writeFileSync(notePath, JSON.stringify([]));
    const data = fs.readFileSync(notePath, 'utf-8');
    return JSON.parse(data);
}

function save() {
    fs.writeFileSync(notePath, JSON.stringify(notes));
    return console.log(`All data saved to ${notePath}`);
}

function getNote(title) {
    return notes.find((note) => note.title === title);
}

function createNote(title, body) {
    console.log(`Create new note. Title - ${title}, body - ${body}`);
    const note = getNote(title);
    if (note) {
        console.log(`The note with title ${title} already exists. The new one won't be added`)
    } else {
        const newNote = {title, body};
        notes.push(newNote);
        save();
    }
}

function readNote(title) {
    const note = getNote(title);
    if (note) {
        console.log(`The note with title ${title} found and contains text: ${note.body}`)
    } else {
        console.log(`The note with title ${title} not found`)
    }
}

function list() {
    if (Array.isArray(notes) && notes.length) {
        console.log('List of notes:');
        notes.forEach((note) => {
            console.log(note);
        });
    } else {
        console.log('The list of notes is empty');
    }
}

function editNote(title, body) {
    const note = getNote(title);
    if (note) {
        console.log(`The note with title ${title}. Change content: ${note.body} -> ${body}`);
        note.body = body;
        save();
        console.log(`Note "${title}" is edited`);
    } else {
        console.log(`The note with title "${title}" does not exist`);
    }
}

function deleteNote(title) {
    console.log(`DELETE ${title}`);
}

module.exports = {
    createNote,
    readNote,
    list,
    editNote,
    deleteNote
};
