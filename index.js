const fs =require('fs');
const path = require('path');
var asciify = require('asciify-image');

var options = {
    fit:'box',    
    width:  100,
    height: 50
  }
  asciify('nodejslogo.png', options, function (err, asciified) {
    if (err) throw err;
   
    // Print to console
    console.log(asciified);
  });













// const textFileName = 'keyboard.txt'


// const textFilePath = path.join(process.cwd(),'data/', textFileName)




// fs.readFile(textFilePath, (err,data) => {
//     console.log("path:" , textFilePath)
//     console.log(data.toString())
// })