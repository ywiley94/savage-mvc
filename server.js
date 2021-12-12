const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;
const connectDB = require('./config/database');
const homeRoutes = require('./routes/home')
const messagesRoutes = require('./routes/messages')
const mongoose = require('mongoose');


require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.use('/', homeRoutes)
app.use('/', messagesRoutes)


app.listen(process.env.PORT, () => {
  console.log('Server is running, you better catch it!' + process.env.PORT)
})