const express = require("express")
const router = express.Router()
const axios = require('axios')
require('dotenv').config

//@route GET api/Properties
//@desc Test route
//@access Public

router.get("/", async (req, res) => {
  var config = {
    method: 'GET',
    url: 'https://realtor.p.rapidapi.com/properties/list-for-sale',
    params: {city: 'miami', offset: '0', limit: '10', state_code: 'FL', sort: 'relevance'},
    headers: {
      'x-rapidapi-key': `${process.env.API_KEY}`,
      'x-rapidapi-host': 'realtor.p.rapidapi.com'
    }
  };
  try {
      const listings = await axios.get(config.url, config)
      res.json(listings.data)
  } catch (error) {
      console.log(error)
      res.error(error)
  }
})

module.exports = router
