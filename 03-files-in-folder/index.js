const fs = require('fs');
var fsp = require('fs/promises');

var path = require('path');

let pathD = path.join(__dirname, `../03-files-in-folder/secret-folder`);
fs.readdir(pathD,(err, data) => {
  data.forEach((element) => {
    let file = element;
    let pathP = path.join(
      __dirname,
      `../03-files-in-folder/secret-folder/${file}`
    );
    const el = fs.readdir(pathP, (err) => {
      if (err) {
        const size = fsp.stat(pathP, err=>{

        } ).then(size=> console.log(`${element.split('.').join(' - ')} - ${size.size}`));

      }
    });
  });
});
