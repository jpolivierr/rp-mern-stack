const express = require("express")
const router = express.Router()
const fs = require("fs")
const path = require("path")
const propsFile = require('../demoProps.json')


router.get("/demo", (req, res) => {
  res.json(propsFile)
})

router.post("/demo", (req, res) => {
  const data = JSON.stringify(req.body)
  File(data)

})

const File = (file) => {
  fs.writeFile(path.join(__dirname,'..', "demoProps.json"), file, (err) => {
    console.log("file written")
  })
}

module.exports = router
