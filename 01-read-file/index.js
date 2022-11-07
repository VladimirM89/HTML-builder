const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, 'text.txt');

function readFile () {
  const result = fs.createReadStream(filePath);
  result.on('data', data => console.log(data.toString()))
}

readFile();