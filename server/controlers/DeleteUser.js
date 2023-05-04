const fs = require("fs");
const path = "./data/users.json";

exports.deleteUser = async (req, res, next) => {
  try {
    const { id } = req.body;
    let data = await fs.promises.readFile(path, "utf8");
    let users = JSON.parse(data);

    // Find the index of the user to delete
    const index = users.findIndex((user) => user.id === id);
    // If the user was found, delete it from the array
    if (index !== -1) {
      users.splice(index, 1);
      await fs.promises.writeFile(path, JSON.stringify(users), "utf8");
      res.status(200).send("User deleted successfully");
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
