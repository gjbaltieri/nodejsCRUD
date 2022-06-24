require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const PORT = 8000;
const productRoute = require('./routes/painelRoute');

// SERVER
app.set('view engine', 'ejs');
app.set('views', './frontend/views');
app.listen(PORT, () => console.log('running in ' + PORT));
app.use(express.static('./frontend/public'))

// MONGOSE
mongoose.connect(process.env.MONGODB_LOGIN)
let db = mongoose.connection
db.on('error', (error) => console.log('houve um erro em db.on', error));
app.use('/', productRoute);