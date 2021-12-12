const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  thumbUps: {
      type: Number,
      required: true,
  }
})

module.exports = mongoose.model('messages', MessageSchema)
