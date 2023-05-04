const fs = require("fs");
const path = "./data/users.json";

exports.addUser = async (req, res, next) => {
  const newUser = req.body.newUser;
  const users = JSON.parse(fs.readFileSync(path, "utf8"));
  //find max id in users
  const ids = users.map((object) => {
    return object.id;
  });
  const max = Math.max(...ids);
  console.log(max);
  //update object by adding the id
  const newUserWithId = { id: max+1, ...newUser };
  users.push(newUserWithId);
  const updatedUsers = JSON.stringify(users, null, 2);
  fs.writeFileSync(path, updatedUsers);
  res.send('User added successfully!' );
};
