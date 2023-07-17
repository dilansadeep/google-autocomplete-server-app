const express = require("express");
const app = express();
require("dotenv").config();
const middleware = require("../src/routes");
var cors = require("cors");
app.use(cors());
app.use("/api", middleware);
app.get("/", (req, res) => {
  res.send("Node Server");
});
app.listen(3003, () => {
  console.log("server running at 3003");
});
