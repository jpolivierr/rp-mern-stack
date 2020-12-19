const express = require("express")
const router = express.Router()
const axios = require("axios")
const setData = require('../../config/setData')
// require("dotenv").config
const configKEY = require('config').get('API_KEY')

//@route GET api/Properties
//@desc Test route
//@access Public

// router.get("/", async (req, res) => {

//   const config = {
//     method: "GET",
//     url: "https://realtor.p.rapidapi.com/properties/list-for-sale",
//     params: {
//       city: "orlando",
//       offset: "0",
//       limit: "10",
//       state_code: "",
//       price_min: "",
//       sort: "relevance",
//       postal_code: "",
//       baths_min: "2",
//       prop_type: "multi_family",
//       price_max: "",
//       beds_min: "2",
//     },
//     headers: {
//       "x-rapidapi-key": `${process.env.API_KEY}`,
//       "x-rapidapi-host": "realtor.p.rapidapi.com",
//     },
//   }
//   try {
//     const listings = await axios.get(config.url, config)
//     res.json(listings.data)
//   } catch (error) {
//     console.log(error)
//     res.error(error)
//   }
// })

router.post("/",setData, async (req, res) => {
  console.log(req.data)
  const {cityOrZipcode ,propertyType, beds, baths, minPrice, maxPrice}= req.data
  console.log(cityOrZipcode)
  const config = {
    method: "GET",
    url: "https://realtor.p.rapidapi.com/properties/list-for-sale",
    params: {
      city: cityOrZipcode ,
      offset: "0",
      limit: "10",
      state_code: "",
      price_min: minPrice,
      sort: "relevance",
      postal_code: "",
      baths_min: baths,
      prop_type: propertyType,
      price_max: maxPrice,
      beds_min:beds,
    },
    headers: {
      "x-rapidapi-key": `${configKEY}`,
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
