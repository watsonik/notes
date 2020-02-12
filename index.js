const yargs = require('yargs');

yargs.command('$0 [name]', 'start the server', (yargs) => {
    yargs
        .positional('name', {
            describe: 'name to display',
            default: 'world'
        })
        .option('times', {
            alias: 't',
            type: 'number',
            default: 1,
            description: 'number of times the message is logged'
        })
}, (argv) => {
    for (let i = 0; i < argv.times; i++) {
        console.log(`Hello ${argv.name}!`)
    }
})
yargs.parse();
