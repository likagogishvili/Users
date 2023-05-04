const express = require("express");
const router = express.Router();
const { GetUsers } = require("../controlers/GetUsers");

// get users => GET
router.get("/users", async (req, res) => {
  try {
    const users = await GetUsers();
    res.send(users);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
