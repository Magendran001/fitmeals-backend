const express = require("express");
const users = require("../model/regeistermodel");
const bcrypt = require('bcrypt');

const verifytoken = (token) => {
    return jwt.verify(token, 'shhhhh', function (err, decoded) {
        console.log(decoded.foo) // bar
    });

}

const route = express.Router();


route.post("", async (req, res, next) => {

    try {

        let x = await users.findOne({ email: req.body.username }).lean().exec();
        if (x.length == 0) {
            return res.send(" please regeister first")
        }
        if (x) {
            console.log(x)
            let confirm = bcrypt.compareSync(req.body.password, x.password);
            if (confirm) {
                return res.send("login success")
            }

        }
        return res.send("Check username or password")
    }
    catch (error) {
        return res.send(error.message)
    }
})

module.exports = route