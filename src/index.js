
const express = require("express");

const connect = require("./connect/mongoose")
const app = express();
app.use(express.json())
const cors = require("cors");


const productcontroller = require("./controller/productcontroller.js");
const regeistercontroller = require("./controller/regeistercontroller.js");
const logincontroller = require("./controller/logincontroller.js");
const usercontroller = require("./controller/usercontroller");
const todoscontroller = require("./controller/todoscontroller")





app.use(cors());
app.use("/regeister", regeistercontroller);
app.use("/login", logincontroller);
app.use("/todos", todoscontroller)

console.log("Connected to backend")


app.use("", productcontroller);
app.use("/user", usercontroller);





const port = process.env.PORT || 9083

app.listen(port, () => {
    connect()
    console.log("listening on 9083 port")
})