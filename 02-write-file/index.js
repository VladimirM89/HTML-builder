const fs = require("fs");
let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);

function createFile() {
  fs.writeFile('02-write-file/text.txt', "", (err) => {
    if (err) {throw err};
  })
}

function writeToFile() {
  console.log("Please enter text:");
  rl.on('line', input => {
    if(input === 'exit' ) {
      process.stdout.write("The End!");
      rl.close();
      return
    }
    fs.appendFile('02-write-file/text.txt', input + "\n", err => {
      if (err) {throw err};
    })
  })
  rl.on('SIGINT', () => {
    process.stdout.write("The End!");
    rl.close();
    return
  })
}

createFile();
writeToFile()