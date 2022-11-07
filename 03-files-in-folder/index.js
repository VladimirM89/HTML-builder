const fs = require("fs");
const path = require("path");
const filePath = path.join("03-files-in-folder", "secret-folder");

function readFilesInDir () {
  fs.readdir(filePath, (err, files) => {
    if (err) {throw err};
    files.forEach(item => {
      const pathItem = path.join("03-files-in-folder", "secret-folder", item)
      fs.lstat(pathItem, (err, stats) => {
        if (err) {throw err};
        if (stats.isFile()) {
          console.log(`${path.basename(item, path.extname(item))} - ${path.extname(item).slice(1)} - ${stats.size / 1000} kb`)
        }
      })
    })
  })
}

readFilesInDir();