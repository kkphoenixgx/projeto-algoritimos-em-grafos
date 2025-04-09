const { execFile } = require('child_process');
const path = require('path');

let execC = {};

const binPath = path.resolve(__dirname, '../C_Scripts/bin/teste');

execC.getTest = () => {
  return new Promise((resolve, reject) => {

    execFile(binPath, (err, stdout, stderr) => {
      if (err) return reject(err);

      try {
        const json = JSON.parse(stdout);
        resolve(json);
      } catch (e) {
        reject(e);
      }
    });
  });
};

module.exports = execC;