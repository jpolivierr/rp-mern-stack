const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ClientSchema = new Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: false,
  },
})

module.exports = mongoose.model("Client", ClientSchema)
