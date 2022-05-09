
const User = require("../model/regeistermodel");

const express = require("express");

const router = express.Router();


router.get("/:id", async (req, res, next) => {

  try {

    let user = await User.findById(req.params.id).lean().exec();

    return res.send(user)

  } catch (error) {

    return res.send({ err: error.message })
  }

})

module.exports = router