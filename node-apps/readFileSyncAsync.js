const fs = require('fs')

//readData()
readDataAsync()
function readData()
{
const n = fs.readFileSync('./note.txt','utf-8')
console.log(n)
console.log('Next line')
}

function readDataAsync()
{

fs.readFile('./note.txt','utf-8',function(error,data){
    console.log(data)
});
console.log('Next line')


}