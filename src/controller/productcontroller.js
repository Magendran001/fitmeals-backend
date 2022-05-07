const mongoose = require("mongoose");
const express = require("express");
const product = require("../model/productmodel")
const route = express.Router();

route.get("", (req, res) => {
    try {
        console.log("yes")
        return res.send("maggi");
    }
    catch (e) {
        return res.send(e.message)
    }
})

route.get("/singleprdt/:_id", async (req, res) => {
    try {
        let x = await product.findById(req.params._id).lean().exec();

        return res.send(x)
    }
    catch (e) {
        return res.send(e.message)
    }
})


route.get("/products/:subcategories", async (req, res) => {

    try {
        console.log(req.params.subcategories);

        let x = await product.find({ categories: req.params.subcategories }).lean().exec();
        console.log(x)

        return res.send(x)
    }
    catch (e) {
        return res.send(e.message)
    }

})



route.get("/products/:subcategories/:sort", async (req, res) => {

    try {

        console.log(req.params)

        let x = await product.find({ categories: req.params.subcategories }).sort({ price: req.params.sort }).lean().exec();

        return res.send(x)
    }
    catch (e) {
        return res.send(e.message)
    }

})



route.get("/product", async (req, res) => {

    let x = await product.find({}).lean().exec();
    return res.send(x)
})

module.exports = route