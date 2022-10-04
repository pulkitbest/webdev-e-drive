const chalk = require('chalk')
const fs = require('fs')

const addNote = (title, body) => {
    const notes = loadNotes()

    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
    

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    }
    else{
        console.log(chalk.red.inverse('Note title taken!'))
    }

}

const removeNote = (title) => {
    const notes = loadNotes()
    const notestoKeep = notes.filter((note) => note.title !== title)
    if(notes.length > notestoKeep.length){
        console.log(chalk.bgGreen('Note Removed'))
        saveNotes(notestoKeep)
    }
    else{
        console.log(chalk.bgRed('No note found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue('Your Notes:'))
    notes.forEach((note) => console.log(note.title))
}

const readNote = (title) => {
    const notes = loadNotes()
    const toRead = notes.find((note) => note.title === title)
    if(toRead){
        console.log(chalk.blue.bold(toRead.title))
        console.log(toRead.body)
    }
    else{
        console.log(chalk.red('No Note Found'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJsON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
    
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}