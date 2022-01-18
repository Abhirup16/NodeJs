const fs = require('fs')
const chalk = require('chalk')
getNotes = function()
{
    return 'heyyy';
}
const removeNote = function(title)
{
     const notes=loadNotes()
     getnote=notes.filter((note)=> {return note.title===title})
     if(getnote.lenght===0)
       console.log('note not found!!')
     else {
       saveNotes(getnote)
       console.log(chalk.green(title+' note has been deleted!'))
     }
}
const addNote= function(title,body)
{
  const notes = loadNotes()
  duplicatenotes = notes.filter((note)=>{return note.title===title})
  if(duplicatenotes.length===0){
  notes.push({title:title,
    body:body
  })
  saveNotes(notes)
  console.log('note added')
  }
  else{
      console.log('note title taken')
  }

}
const saveNotes = function(notes)
{
   const dataJSON=JSON.stringify(notes)
   fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes = function(){
    try{
        dataBuffer = fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}
module.exports = {getnotes: this.getnotes, addnote: addNote, remove: removeNote}