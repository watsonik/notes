const fs = require('fs');
const path = require('path');
const notePath = path.resolve(__dirname, '..', 'data', 'notes.json');

var notes;

function fetchData() {
    fs.existsSync(notePath) || fs.writeFileSync(notePath, JSON.stringify([]));
    const data = fs.readFileSync(notePath, 'utf-8');
    return JSON.parse(data);
}

function save() {
    fs.writeFileSync(notePath, JSON.stringify(notes));
    return console.log(`All data saved to ${notePath}`);
}

function createNote(title, body) {
    console.log(`Create new note. Title - ${title}, body - ${body}`);
    notes = fetchData();
    const note = {title, body};
    notes.push(note);
    save();
}

function readNote(title) {
    console.log(`READ ${title}`);
}

function list() {
    console.log(`LIST ALL NOTES`);
    console.log(`DIR ${notePath}`);
}

function editNote(title, body) {
    console.log(`EDIT ${title} ${body}`);
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
