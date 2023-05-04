const express = require("express");
const router = express.Router();
const userController = require("../controlers/AddUser");

// delete user => POST
router.post("/addUser", userController.addUser);

module.exports = router;
