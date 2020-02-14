const yargs = require('yargs');
const service = require('./services/noteService');

yargs.command('create', 'create note', {
        title: {
            alias: 't',
            type: 'string',
            demandOption: true,
            description: 'note title'
        },
        body: {
            alias: 'b',
            type: 'string',
            default: 'default text'
        }
    },
    (args) => service.createNote(args.title, args.body)
);

yargs.command('read', 'read note', {
        title: {
            alias: 't',
            type: 'string',
            demandOption: true,
            description: 'note title'
        }
    },
    (args) => service.readNote(args.title)
);

yargs.command('list', 'list all notes',
    () => service.list()
);

yargs.command('edit', 'edit note', {
        title: {
            alias: 't',
            type: 'string',
            demandOption: true,
            description: 'note title'
        },
        body: {
            alias: 'b',
            type: 'string',
            default: 'new text',
            description: 'put new text here'
        }
    },
    (args) => service.editNote(args.title, args.body)
);
yargs.command('delete', 'delete note', {
        title: {
            alias: 't',
            type: 'string',
            demandOption: true,
            description: 'note title'
        }
    },
    (args) => service.deleteNote(args.title)
)
    .help()
    .argv;

