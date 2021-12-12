const express = require('express')
const router = express.Router()
const messageController = require('../controllers/messages')

//create message
router.post('/messages', messageController.createMessage)

  // // When ThumbUp is click
router.put('/messages', messageController.thumbUps)

  // When ThumbDown is click
router.put('/messagesDown', messageController.thumbDowns)
  
  //Delete message
router.delete('/messages', messageController.deleteMessage)

  module.exports = router