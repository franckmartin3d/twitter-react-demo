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

app.get("/api/list", (req, res) => {
  var searchTwitterParam = {
    q: "banana",
    count: 3
  };

  // get  tweet data from twitter api
  T.get("search/tweets", searchTwitterParam, function(err, data, response) {
    res.json(data.statuses);
  });
});

// //  app.use(express.static(path.join(__dirname,'views')))
app.use(express.static(__dirname + '/client/build/'))

const port = 5000;

app.listen(port, ()=> console.log('Server started on port:' + port));