const express = require("express");
const app = express();
const mongoose = require("mongoose");
//const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");
const bodyParser = require ('body-parser');
const fs = require("fs");
const path = require("path");




mongoose.connect("mongodb://127.0.0.1:27017/edenproject", () => {
  console.log("DB connected");
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
app.use(cors());
app.use("/app", routesUrls);
app.listen(4000, () => console.log("Server is running "));
