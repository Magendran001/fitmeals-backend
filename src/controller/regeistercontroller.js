const user = require("../model/regeistermodel.js");
const express = require("express");
var jwt = require('jsonwebtoken');
const generatetoken = (user) => {
    return jwt.sign({ user }, 'shhhhh');
}

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
        if (User.length !== 0) {
            return res.send({ message: "user already exist" });
            console.log(User, "nnnnnn")
        }
        let x = await user.create(req.body);
        console.log(x)
        const token = generatetoken(x);


        return res.send({ x, token });
    }
    catch (error) {
        return res.send({ error: error.message })
    }
})




module.exports = route