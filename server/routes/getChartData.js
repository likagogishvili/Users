const express = require("express");
const router = express.Router();
const { GetUsers } = require("../controlers/GetUsers");

// get users => GET
router.get("/chartData", async (req, res) => {
  try {
    const users = await GetUsers();
    const cities = {};
    users.forEach((user) => {
      const city = user.address.city;
      cities[city] = cities[city] ? cities[city] + 1 : 1;
    });
    const total = users.length;
    const data = Object.entries(cities).map(([city, count]) => ({
      city,
      percentage: Math.round((count / total) * 100 * 100) / 100,
    }));
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
