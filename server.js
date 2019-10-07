const express = require('express')
const app = express();
const path = require("path");
const axios = require("axios");
const Twit = require('twit');

//Access Twitter

//Aut
const T = new Twit({
  consumer_key: 'GpsliqfVao3RNBHWv1vTTNPAF'
  ,consumer_secret: 'l7An7vEfJqSwAEwT1phtq8zGAHevXNzWiPZHKrweElsrBkHiB9'
  ,access_token: '567024706-r0zx6jNyLzJHxoMHC4jM1NROhqqxXiXcofjjT7KC'
  ,access_token_secret:'0llsQFGz0y36R5g8QnbHdG373f75f0QByTipu4oRl7pHi'

})

// serach twitter param
var twitParam = {
  q: 'banana',
  count:1
}

// get from twitter api
T.get('search/tweets', twitParam, gotData);
 
// log the response
function gotData(err,data,response){
  
  console.log(data);
}

// //  app.use(express.static(path.join(__dirname,'views')))
// app.use(express.static(__dirname + '/client/build/'))



const port = 5000;

app.listen(port, ()=> console.log('Server started on port:' + port));