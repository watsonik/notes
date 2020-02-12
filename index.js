const yargs = require('yargs');

yargs.command('get', 'make a get HTTP request', {
        url: {
            alias: 'u',
            default: 'http://yargs.js.org/'
        }
    }, (args) => console.log(args.url)
)
    .help()
    .argv
yargs.parse();
