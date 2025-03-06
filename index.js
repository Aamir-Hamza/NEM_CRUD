const express = require("express");
const cors = require("cors")
const app = express();
app.use(express.json())
app.use(cors());
const dbconnection = require("./config/db")
const routess = require("./routes/user")
require("dotenv").config();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

dbconnection()
//routes
app.use("/api/users", routess)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});