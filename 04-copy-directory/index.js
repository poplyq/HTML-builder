const fs = require('fs');
var fsp = require('fs/promises');
var path = require('path');

let pathD = path.join(__dirname, `../04-copy-directory/files-copy`);
let pathA = path.join(__dirname, `../04-copy-directory/files`);

fs.readdir(pathD, async (err, data) => {
  if (err) {
    fsp
      .mkdir(pathD, async (err) => {})
      .then(
        fs.readdir(pathA, (err, data) => {
          data.forEach((element) => {
            let pathF = path.join(
              __dirname,
              `../04-copy-directory/files/${element}`
            );
            let pathC = path.join(
              __dirname,
              `../04-copy-directory/files-copy/${element}`
            );
            fs.copyFile(pathF, pathC, (err) => {
              console.log(err);
            });
          });
        })
      );
  } else {
    data.forEach((e) => {
      let pathF = path.join(__dirname, `../04-copy-directory/files-copy/${e}`);
      fs.unlink(pathF, (err) => console.log(err));
    });
    fs.readdir(pathA, (err, data) => {
      data.forEach((element) => {
        let pathF = path.join(
          __dirname,
          `../04-copy-directory/files/${element}`
        );
        let pathC = path.join(
          __dirname,
          `../04-copy-directory/files-copy/${element}`
        );
        fs.copyFile(pathF, pathC, (err) => {
          console.log(err);
        });
      });
    });
  }

});
