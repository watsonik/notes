const yargs = require('yargs');

yargs.command('get', 'make a get HTTP request', {
        url: {
            alias: 'u',
            default: 'http://yargs.js.org/'
        }
    }, (args) => console.log(args.url)
);
// .help()
// .argv;
yargs.command('list', 'list all notes', {
        title: {
            alias: 't',
            default: 'TITLE'
        },
        body: {
            alias: 'b',
            default: 'BODY'
        }
    }, (args) => console.log(`All notes - title ${args.title}, body ${args.body}`)
)
    .help()
    .argv;

// yargs.parse();
