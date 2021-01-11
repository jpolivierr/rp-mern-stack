const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
        console.log('----------------------------------------------------db connected')
    }catch(err){
        console.error(err.message)
        //Ecit process with failure
        process.exit(1)
    }
}

module.exports = connectDB