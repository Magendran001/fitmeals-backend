require("dotenv").config();
const express = require("express");
const connect = require("./configs/db");
const cors = require("cors");
const productcontroller = require("./controller/productcontroller.js");


const app = express();

app.use(express.json());

app.use(cors());

console.log("Connected to backend")


app.use("", productcontroller);


app.listen(process.env.PORT || 5500, async function () {
  try {
    await connect();
    console.log("app is listening on port 5500");
  } catch (err) {
    console.log(err.message);
  }
});
