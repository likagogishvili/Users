const fs = require("fs/promises");
const path = "./data/users.json";

exports.GetUsers = async () => {
  try {
    const fileContent = await fs.readFile(path);
    const users = JSON.parse(fileContent);
    return users;
  } catch (err) {
    console.error(err);
    return [];
  }
};
