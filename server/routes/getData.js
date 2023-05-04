const express = require('express');
const router = express.Router();
const GetUsers = require('../controlers/GetUsers');

// get users => GET
GetUsers().then((item) => router.get('/users', (req, res) => res.send(JSON.parse(item))))

module.exports = router;
