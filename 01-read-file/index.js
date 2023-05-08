const fs = require('fs');
var path = require('path');

let pathP = path.join(__dirname, `../01-read-file/text.txt`);

let stream = new fs.ReadStream(pathP, { encoding: 'utf-8' });

stream.on('readable', function () {
  var data = stream.read();
  console.log(data);
});
