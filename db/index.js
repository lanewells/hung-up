require('dotenv').config()
const mongoose = require("mongoose")

const uri = process.env.MONGODB_URI
if (!uri) {
  throw new Error("MONGODB_URI not set in environment!")
}

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.")
  })
  .catch((e) => {
    console.error("Connection error", e.message)
  })

const db = mongoose.connection

module.exports = db