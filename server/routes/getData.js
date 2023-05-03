const express = require('express');
const router = express.Router();
let path = './data/users.json'
const fs = require('fs/promises');

// get users => GET
fs.readFile(path)
    .then((data) => {
        router.get('/', (req, res) => res.send(JSON.parse(data)));
    })
    .catch((error) => {
        console.log(error)
    });



module.exports = router;