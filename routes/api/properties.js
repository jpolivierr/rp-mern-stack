const express = require("express")
const router = express.Router()
const axios = require("axios")
require("dotenv").config

//@route GET api/Properties
//@desc Test route
//@access Public

router.get("/", async (req, res) => {
  const config = {
    method: "GET",
    url: "https://realtor.p.rapidapi.com/properties/list-for-sale",
    params: {
      city: "orlando",
      offset: "0",
      limit: "10",
      state_code: "",
      price_min: "",
      sort: "relevance",
      postal_code: "",
      baths_min: "2",
      prop_type: "multi_family",
      price_max: "",
      beds_min: "2",
    },
    headers: {
      "x-rapidapi-key": `${process.env.API_KEY}`,
      "x-rapidapi-host": "realtor.p.rapidapi.com",
    },
  }
  try {
    const listings = await axios.get(config.url, config)
    res.json(listings.data)
  } catch (error) {
    console.log(error)
    res.error(error)
  }
})

router.post("/", async (req, res) => {
  console.log(req.body)
  console.log(req.body.cityOrZipcode)
  const config = {
    method: "GET",
    url: "https://realtor.p.rapidapi.com/properties/list-for-sale",
    params: {
      city: req.body.cityOrZipcode,
      offset: "0",
      limit: "10",
      state_code: "",
      price_min: "",
      sort: "relevance",
      postal_code: "",
      baths_min: req.body.baths,
      prop_type: req.body.propertyType,
      price_max: "",
      beds_min: req.body.beds,
    },
    headers: {
      "x-rapidapi-key": `${process.env.API_KEY}`,
      "x-rapidapi-host": "realtor.p.rapidapi.com",
    },
  }
  try {
    const listings = await axios.get(config.url, config)
    res.json(listings.data)
  } catch (error) {
    console.error(error)
    res.error(error)
  }
})

module.exports = router
