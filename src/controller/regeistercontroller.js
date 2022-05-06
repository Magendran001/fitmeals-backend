const user = require("../model/regeistermodel.js");
const express = require("express");

const route = express.Router();


// route.get("", (req, res, next) => {
//     try {

//         console.log("x");
//         return res.send("x")
//     }
//     catch (error) {
//         return res.send({ error: error.message })
//     }
// })

route.post("", async (req, res, next) => {
    try {

        let User = await user.find({ email: req.body.email }).lean().exec();
        console.log(User)
        if (!User) {
            return res.send({ message: "user already exist" });
            console.log(User, "nnnnnn")
        }
        let x = await user.create(req.body);
        return res.send(x);
    }
    catch (error) {
        return res.send({ error: error.message })
    }
})




module.exports = route