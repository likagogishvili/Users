const fs = require('fs/promises');
const Path = './data/users.json'

function GetUsers() {
  return fs.readFile(Path, (err, fileContent) => {
    if (err) {
      return []
    }
    return JSON.parse(fileContent)
  });
}
module.exports = GetUsers