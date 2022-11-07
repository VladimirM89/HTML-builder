const fs = require("fs");
const path = require("path");
const existFolderName = 'files';
const pathNewDir = "04-copy-directory";

function createDir() {
  fs.mkdir(path.join(pathNewDir, `${existFolderName}-copy`), {recursive: true}, (err) => {
    if (err) throw err;
  } )
}

function copyFiles() {
  fs.readdir(path.join(pathNewDir, existFolderName), (err, files) => {
    if (err) throw err;
    files.forEach(item => {
      fs.copyFile(path.join(pathNewDir, existFolderName, item), path.join(pathNewDir, `${existFolderName}-copy`, item), err => {
        if (err) throw err;
      })
    })
  })
}

createDir();
copyFiles();