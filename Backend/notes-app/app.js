const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
const { demandOption } = require('yargs')

// const a = getNotes("Your Notes...")
// console.log(a)

// console.log(validator.isEmail('pulkit@example.com'))
// console.log(validator.isURL('https://mead.io'))
// console.log(chalk.red.bold.bgGreen('Success!')) //order doesn't matter

//customize yargs version
yargs.version('1.1.0')

// add, remove, read, list

//add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//list command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler(){
        notes.listNotes()
    }
})

//read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()
// console.log(yargs.argv)