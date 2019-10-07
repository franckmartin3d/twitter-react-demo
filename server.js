const express = require('express')
const app = express();
const path = require("path");
const axios = require("axios");
const Twit = require('twit');

//Access Twitter

//Autorization for twitter API
const T = new Twit({
  consumer_key: 'GpsliqfVao3RNBHWv1vTTNPAF'
  ,consumer_secret: 'l7An7vEfJqSwAEwT1phtq8zGAHevXNzWiPZHKrweElsrBkHiB9'
  ,access_token: '567024706-BcrLin5rTkbckgcn3W3eYwDm4rZIm8bLC4b5AmNl'
  ,access_token_secret:'AnARJq9jIzbwmZVL7GJyjcHe6VlpzbFJdyXLW206kCCbn'

})

// serach twitter param
var twitParam = {
  q: 'banana',
  count:3
}

// get  tweet data from twitter api
T.get('search/tweets', twitParam, gotData);
 
// log the response
function gotData(err,data,response){
  var twitterCard = data
  console.log(data)
  // send endpoint to my client 
  app.get('/api/list', (req,res)=>{

      
      res.json(twitterCard);
  });
  
}

// //  app.use(express.static(path.join(__dirname,'views')))
app.use(express.static(__dirname + '/client/build/'))

// app.get ('/api/twitter',function(req, res){

//   axios.get('https://api.twitter.com/1.1/search/tweets.json?q=nasa')
//   .then(function (response) {
//     // handle success
//     res.send(response.data);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   });
// });

const port = 5000;

app.listen(port, ()=> console.log('Server started on port:' + port));