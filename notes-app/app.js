const validator = require('validator')
const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')



const command = process.argv[2]

yargs.command({
    command:'remove',
    describe:'Remote a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler : function(argv){
       notes.remove(argv.title)
    }
})

yargs.command({
    command:'read',
    describe:'Read a note',
    handler : function(){
        console.log()
    }
})

yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler : function(argv){
        notes.addnote(argv.title,argv.body)
    }
})

yargs.parse()