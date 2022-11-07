const fs = require("fs");
const path = require("path");
const pathNewDir = path.join('06-build-page', "project-dist");


(function createDir() {
  fs.mkdir(pathNewDir, {recursive: true}, (err) => {
    if (err) throw err;
  })
})();

(function createFile() {
  fs.readFile(path.join("06-build-page", "template.html"), "utf-8", (err, data) => {
    if (err) throw err;
    
    if (data.includes("{{header}}")) {
      fs.readFile(path.join("06-build-page", "components", "header.html"), "utf-8", (err, dataheader) => {
        if (err) throw err;
        data = data.replace("{{header}}", dataheader);
        fs.writeFile(path.join(pathNewDir, "index.html"), data, err => {
          if (err) throw err;
        })
      })
    }
    
    if (data.includes("{{articles}}")) {
      fs.readFile(path.join("06-build-page", "components", "articles.html"), "utf-8", (err, dataarticles) => {
        if (err) throw err;
        data = data.replace("{{articles}}", dataarticles)
        fs.writeFile(path.join(pathNewDir, "index.html"), data, err => {
          if (err) throw err;
        })
      })
    }

    if (data.includes("{{about}}")) {
      fs.readFile(path.join("06-build-page", "components", "about.html"), "utf-8", (err, dataarticles) => {
        if (err) throw err;
        data = data.replace("{{about}}", dataarticles)
        fs.writeFile(path.join(pathNewDir, "index.html"), data, err => {
          if (err) throw err;
        })
      })
    }

    if (data.includes("{{footer}}")) {
      fs.readFile(path.join("06-build-page", "components", "footer.html"), "utf-8", (err, datafooter) => {
        if (err) throw err;
        data = data.replace("{{footer}}", datafooter)
        fs.writeFile(path.join(pathNewDir, "index.html"), data, err => {
          if (err) throw err;
        })
      })
    }
  })
})();

(function copyFilesContent() {
  fs.readdir(path.join("06-build-page", "styles"), (err, files) => {
    if (err) {throw err};
    files.forEach(item => {
      const pathItem = path.join("06-build-page", "styles", item);
      fs.lstat(pathItem, (err, stats) => {
        if (err) {throw err};
        if (stats.isFile() && path.extname(item) === '.css') {
          fs.readFile(pathItem, (err, data) => {
            if (err) throw err;
            fs.appendFile('06-build-page/project-dist/style.css', data, err => {
              if (err) throw err;
            })
          })
        }
      })
    })
  })
})();

(function copyAssetsFiles() {
  fs.readdir(path.join("06-build-page", 'assets'), (err) => {
    if (err) throw err;
    fs.cp(path.join("06-build-page", 'assets'), path.join(pathNewDir, 'assets'), {recursive: true}, err => {
      if (err) throw err;
    })
  })
})();