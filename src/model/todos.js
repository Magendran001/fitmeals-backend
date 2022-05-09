const mongoose = require("mongoose");



const todosschema = mongoose.Schema({

    todo: { type: String, required: true },
    todosabout: { type: String, required: true },

    user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    todostatus: { type: String, required: true },



})




const todo = mongoose.model("todos", todosschema);

module.exports = todo;

