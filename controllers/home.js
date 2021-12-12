const Message = require('../models/Message')

module.exports = {
    getIndex: async (req,res)=>{
        try {
            const messages = await Message.find()
            res.render('index.ejs', {messages: messages})
        }catch(err) {
            console.log(err)
        }
    }
}