const Mongoose = require("mongoose");

const connect = () => Mongoose.connect("mongodb+srv://fitmeal:fitmeal001@cluster0.yr9xi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

module.exports = connect 
