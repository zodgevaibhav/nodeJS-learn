const getNote = require('./note.js')
const msg = getNote()
console.log(msg)

//const fs = require('fs') 
//fs.writeFileSync('note.txt','New file created here')
//fs.appendFileSync('note.txt','\n Data appended here')