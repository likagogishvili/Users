const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors())
app.use(express.json());

const selectUsers = require('./routes/getData');
const deleteRecord = require('./routes/deleteRecord');



// app.use(userRoute);
app.use(selectUsers);
app.use(deleteRecord);



app.listen(5000, () => {
  console.log("Server Started on Port 5000");
});