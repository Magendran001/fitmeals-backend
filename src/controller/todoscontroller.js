const express = require("express");
const Todo = require("../model/todos");

const router = express.Router();

router.get("/:id", async (req, res, next) => {
    try {


        let todos = await Todo.find({ user_id: req.params.id }).lean().exec();
        console.log(todos)

        return res.send(todos)

    }
    catch (e) {
        return res.send({ error: e.message })
    }
})

router.get("/:id/:name", async (req, res, next) => {
    try {

        console.log(req.params)

        let todos = await Todo.find({ $and: [{ user_id: req.params.id }, { todostatus: req.params.name }] }).lean().exec();
        console.log(todos)

        return res.send(todos)

    }
    catch (e) {
        return res.send({ error: e.message })
    }
})

router.post("/:id", async (req, res, next) => {
    try {

        console.log(req.body, "bbbbbb")

        let todo = await Todo.create(req.body);
        console.log(todo);

        return res.send(todo)

    }
    catch (e) {
        return res.send({ error: e.message })
    }
})

module.exports = router;