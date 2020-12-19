const express = require("express")
const connectDB = require("./config/db")
const path = require("path")
const app = express()
const cors = require("cors")
const PORT = process.env.PORT || 5000

//Init Middleware
app.use(express.json({ extended: false }))
app.use(cors())
// app.use(function (req, res, next) {
//   res.setHeader("Content-Type", "text/javascript")
//   next()
// })
//Connect Database
connectDB()

//Define Routes
app.use("/", require("./routes/api/demoProp"))
app.use("/properties/", require("./routes/api/properties"))
app.use("/client/", require("./routes/api/client"))

app.use(express.static(path.join(__dirname, "client/build")))
// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
//   })
// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder

  
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
