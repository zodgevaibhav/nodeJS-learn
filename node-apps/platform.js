const os = require('os')

console.log('Platform ' +os.platform())
console.log(os.hostname())
console.log(os.arch())
console.log(os.homedir())
console.log(os.totalmem())
console.log(os.freemem())

console.log(os.cpus())