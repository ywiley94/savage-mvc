const Message = require('../models/Message')

module.exports = {
    createMessage: async (req, res) => {
        try{
            await Message.create({
                name: req.body.name,
                message: req.body.message,
                thumbUps: 0
            })
            console.log('Message has been added to the database')
            res.redirect('/')
        } catch(err){
            console.log(err)
        }
    },
    thumbUps: async (req, res) => {
        try{
            await Message.findOneAndUpdate({name: req.body.name, message: req.body.message}, {
                $set: {
                    thumbUps: req.body.thumbUps + 1
                  },
            }, {
                sort: {_id: -1},
                upsert: true
            })
            console.log('Message has been updated')
            res.json('Message Updated')
        }catch(err) {
            console.log(err)
        }
    },
    thumbDowns: async (req, res) => {
        try{
            await Message.findOneAndUpdate({name: req.body.name, message: req.body.message}, {
                $set: {
                    thumbUps: req.body.thumbUps - 1
                  },
            }, {
                sort: {_id: -1},
                upsert: true
            })
            console.log('Message has been updated')
            res.json('Message Updated')
        }catch(err) {
            console.log(err)
        }
    },
    
    deleteMessage: async (req, res) => {
        try {
            await Message.findOneAndDelete({name: req.body.name, message: req.body.message})
            console.log('message deleted')
            res.json('Message deleted')
        } catch(err) {
            console.log(err)
        }
    },
    
}