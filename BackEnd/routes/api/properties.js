const express = require("express")
const router = express.Router()

//@route GET api/Properties
//@desc Test route
//@access Public

router.get("/", (req, res) => res.send("Properties list section"))

module.exports = router
