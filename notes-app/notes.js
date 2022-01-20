const fs = require('fs')
const chalk = require('chalk')
getNotes = function()
{
  const notes=loadNotes()
  notes.forEach((note)=>{console.log('Note Title: '+note.title+'\n'+note.body+'\n')})
}
const removeNote = (title) =>
{
     const notes=loadNotes()
     getnote=notes.filter((note)=> {return note.title!==title})
     if(getnote.length===notes.length)
       console.log(chalk.red('note not found!!'))
     else {
       saveNotes(getnote)
       console.log(chalk.green(title+' note has been deleted!'))
     }
}
const addNote= (title,body) =>{
  const notes = loadNotes()
  duplicatenotes = notes.filter((note)=>{return note.title===title})
  if(duplicatenotes.length===0){
  notes.push({title:title,
    body:body
  })
  debugger
  saveNotes(notes)
  console.log('note added')
  }
  else{
      console.log('note title taken')
  }

}
const saveNotes = (notes)=>{
   const dataJSON=JSON.stringify(notes)
   fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes = () => {
    try{
        dataBuffer = fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}
module.exports = {getnotes: getNotes, addnote: addNote, remove: removeNote}