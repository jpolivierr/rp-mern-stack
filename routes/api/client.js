const express = require("express")
const router = express.Router()
const Client = require("../../Models/client")
const { check, validationResult } = require("express-validator")

router.get("/", (req, res) => res.send("client info..."))

router.post(
  "/",
  [
    check("fname", "First name is required").not().isEmpty(),
    // check("lname", "Last name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
  ],
  async (req, res) => {
    try {
      const newClient = new Client({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        message: req.body.message,
      })
      const errors = validationResult(req)
      if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
      }
      res.status(200).json({ msg: req.body , success_message: 'Thank you for contacting us.'})

      const post = await newClient.save()
    } catch (err) {
      console.error(err.message)
      res.status(500).json({ msg: "server Error" })
    }
  }
)

module.exports = router
