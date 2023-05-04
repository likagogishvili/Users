const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors())
app.use(express.json());

const selectUsers = require('./routes/getData');
const deleteRecord = require('./routes/deleteRecord');
const addNewUser = require('./routes/addNewUser');




// app.use(userRoute);
app.use(selectUsers);
app.use(deleteRecord);
app.use(addNewUser);




app.listen(3001, () => {
  console.log("Server Started on Port 3001");
});