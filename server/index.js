const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const getUsers = require("./routes/getUsers");
const deleteUser = require("./routes/deleteUser");
const addUser = require("./routes/addUser");
const updateUser = require("./routes/updateUser");
const getChartData = require("./routes/getChartData");


app.use(getUsers);
app.use(deleteUser);
app.use(addUser);
app.use(updateUser);
app.use(getChartData)

app.listen(3001, () => {
  console.log("Server Started on Port 3001");
});
