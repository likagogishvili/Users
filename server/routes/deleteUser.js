const express = require("express");
const router = express.Router();
const userController = require("../controlers/DeleteUser");

// delete user => POST
router.post("/deleteUser", userController.deleteUser);

module.exports = router;
