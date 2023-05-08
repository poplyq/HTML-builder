const fs = require('fs');
var fsp = require('fs/promises');
var path = require('path');

let pathD = path.join(__dirname, `../05-merge-styles/styles`);
let pathA = path.join(__dirname, `../05-merge-styles/project-dist/bundle.css`);

fs.readdir(pathD, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    let newArr = [];
    data.forEach((ele) => {
      let pathS = path.join(__dirname, `../05-merge-styles/styles/${ele}`);
      function getExtension(filename) {
        var i = filename.lastIndexOf('.');
        return i < 0 ? '' : filename.substr(i);
      }
      const extension = getExtension(ele);
      if (extension === '.css') {
        const promis = new Promise((resolve, reject) => {
          fs.readFile(pathS, 'utf8', (err, data) => {
            if (err) {
              console.log(err);
            } else {
              resolve (data)
            }
          });
        });
     
        promis.then(value=>{
            fs.appendFile(pathA, value, err=>console.log(err))
        })
      }
    });

  }
});
