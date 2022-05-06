
const express = require("express");

const connect = require("./connect/mongoose")
const app = express();
const cors = require("cors");

const productcontroller = require("./controller/productcontroller.js");




app.use(cors());

console.log("Connected to backend")


app.use("", productcontroller);







app.listen(9083, () => {
    connect()
    console.log("listening on 9083 port")
})