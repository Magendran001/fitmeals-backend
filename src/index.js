
const express = require("express");

const connect = require("./connect/mongoose")
const app = express();
app.use(express.json())
const cors = require("cors");

const productcontroller = require("./controller/productcontroller.js");
const regeistercontroller = require("./controller/regeistercontroller.js");
const logincontroller = require("./controller/logincontroller.js")





app.use(cors());
app.use("/regeister", regeistercontroller);
app.use("/login", logincontroller)

console.log("Connected to backend")


app.use("", productcontroller);







app.listen(9083, () => {
    connect()
    console.log("listening on 9083 port")
})