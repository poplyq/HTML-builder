const { Writable } = require('node:stream');

const myStream = new Writable();


myStream.on('drain', ()=>{
writeOneMillionTimes(prompt(), prompt.name)
})

function writeOneMillionTimes(writer, data, encoding, callback) {
    let i = 1000000;
    write();
    function write() {
      let ok = true;
      do {
        i--;
        if (i === 0) {
          // Last time!
          writer.write(data, encoding, callback);
        } else {
          // See if we should continue, or wait.
          // Don't pass the callback, because we're not done yet.
          ok = writer.write(data, encoding);
        }
      } while (i > 0 && ok);
      if (i > 0) {
        // Had to stop early!
        // Write some more once it drains.
        writer.once('drain', write);
      }
    }
  } 