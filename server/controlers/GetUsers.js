const fs = require('fs/promises');
const Path = './data/users.json'

exports.GetUsers = async () => {
  try {
    const fileContent = await fs.readFile(Path, 'utf8');
    const users = JSON.parse(fileContent);
    return users;
  } catch (err) {
    console.error(err);
    return [];
  }
};
