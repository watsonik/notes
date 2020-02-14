function createNote(title, body) {
    console.log(`CREATE ${title} ${body}`);
}

function readNote(title) {
    console.log(`READ ${title}`);
}

function list() {
    console.log(`LIST ALL NOTES`);
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
