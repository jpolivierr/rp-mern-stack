const mongoose = require('mongoose')
const configdb = require('config').get('mongoURI')
// require('dotenv').config()

const connectDB = async () => {
    try{
        await mongoose.connect(configdb,{ useNewUrlParser: true, useUnifiedTopology: true })
        console.log('----------------------------------------------------db connected')
    }catch(err){
        console.error(err.message)
        //Ecit process with failure
        process.exit(1)
    }
}

module.exports = connectDB