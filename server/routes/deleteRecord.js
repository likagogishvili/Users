const express = require('express');
const router = express.Router();
const userController = require('../controlers/users');

// delete user => POST
router.post('/deleteRecord', userController.deleteRecord);


module.exports = router;