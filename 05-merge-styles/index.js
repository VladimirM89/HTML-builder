const fs = require("fs");
const path = require("path");

function createFile() {

  fs.writeFile('05-merge-styles/project-dist/bundle.css', "", (err) => {
    if (err) {throw err};
  })
}

function copyFilesContent() {
  fs.readdir(path.join("05-merge-styles", "styles"), (err, files) => {
    if (err) {throw err};
    files.forEach(item => {
      const pathItem = path.join("05-merge-styles", "styles", item);
      fs.lstat(pathItem, (err, stats) => {
        if (err) {throw err};
        if (stats.isFile() && path.extname(item) === '.css') {
          fs.readFile(pathItem, (err, data) => {
            if (err) throw err;
            fs.appendFile('05-merge-styles/project-dist/bundle.css', data, err => {
              if (err) throw err;
            })
          })
        }
      })
    })
  })
}



createFile();
copyFilesContent ();