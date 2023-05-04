const fs = require("fs");
const path = "./data/users.json";

exports.addUser = async (req, res, next) => {
  const newUser = req.body.newUser;
  const users = JSON.parse(fs.readFileSync(path));
  //find max id in users
  const ids = users.map((object) => {
    return object.id;
  });
  const max = Math.max(...ids);
  //update object by adding the id
  const newUserWithId = { id: max + 1, ...newUser };
  users.push(newUserWithId);
  const updatedUsers = JSON.stringify(users);
  fs.writeFileSync(path, updatedUsers);
  res.send("User added successfully!");
};
