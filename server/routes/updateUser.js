const express = require("express");
const router = express.Router();
const userController = require("../controlers/UpdateUser");

// delete user => POST
router.post("/updateUser", userController.updatedUser);

module.exports = router;
