const mongoose = require("mongoose");

const productschema = new mongoose.Schema({

    image: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: Number, required: true },
    about_product: [{ type: String, required: false }],
    quantity: { type: Number, required: true },
    categories: [{ type: String, required: true }],
    subcategories: { type: String, required: true }

})

const product = mongoose.model("product", productschema);

module.exports = product;