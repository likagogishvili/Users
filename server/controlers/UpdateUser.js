const fs = require("fs").promises;
const path = "./data/users.json";
exports.updatedUser = async (req, res, next) => {
  try {
    const updatedUser = req.body.newUser;
    const usersJson = await fs.readFile(path);
    const users = JSON.parse(usersJson);

    // find the user to update
    const userToUpdate = users.find((user) => user.id === updatedUser.id);
    //update old values with new ones
    Object.assign(userToUpdate, updatedUser);
    await fs.writeFile(path, JSON.stringify(users));
    res.status(200).json({
      message: "User updated successfully"
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};
