
const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://fitmeal:fitmeal001@cluster0.yr9xi.mongodb.net/myFirstDatabase")
}
