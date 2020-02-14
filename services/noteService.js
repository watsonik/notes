const fs = require('fs');
const path = require('path');
const notePath = path.resolve(__dirname, '..', 'data', 'notes.json');


function fetchNotes() {
    return fs.existsSync(notePath) || fs.writeFileSync(notePath, JSON.stringify([]));
}

function createNote(title, body) {
    const notes = fetchNotes();
    console.log(`CREATE ${title} ${body}`);
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
