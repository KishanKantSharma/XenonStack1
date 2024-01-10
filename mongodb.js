const mongoose = require("mongoose")

const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://kishan:1801@db.sb7d6hf.mongodb.net/?retryWrites=true&w=majority");
  } catch (error) {
    console.log(error)
  }
}


const LogInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const collection = new mongoose.model("Collection1", LogInSchema)

module.exports = collection