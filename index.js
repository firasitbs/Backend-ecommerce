const express = require('express')
const bodyparser = require('body-parser');
const mongoose = require('mongoose')
var cors = require('cors')
const router = require('./Routes/auth.user')
var app = express()

app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}))


//Routes
app.use(bodyparser.json())
app.get('/', function(req,res){
  res.send('Hello world')
})
//MongoDb connection
mongoose.connect('mongodb+srv://firas:firas@cluster0.o1h5f.mongodb.net/itbsproject?retryWrites=true&w=majority', {useNewUrlParser: true});
mongoose.connection.once('open',function(){
  console.log('Database connected Successfully');
}).on('error',function(err){
  console.log('Error', err);
})

app.use('/account/api',router)
require('./Routes/produit.route')(app);
//Server 
app.listen('8000',function(req,res){
  console.log('Serve is up and running at the port 8000')
})
