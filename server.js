const express = require('express')
const app = express();
const path = require("path");
const axios = require("axios");

app.get('/api/list', (req,res)=>{
    //Default test
    // const list =[
    //     {id: 1 , firstName: 'John', lastName: 'Doe'},
    //     {id: 2 , firstName: 'Mila', lastName: 'Lejla'},
    //     {id: 3 , firstName: 'Nat', lastName: 'Thecat'}

    // ];
   const cards = [
        {
          user: "Donal Trump",
          tweet: "i am an idiot",
          date: "9/12/2019",
          id: 1
        },
        {
          user: "Devil",
          tweet: " I am the Neigbour of the beast",
          date: "6/06/666",
          id: 2
        },
        {
          user: "Barrack",
          tweet: " I was born in honolulu!!",
          date: "1/02/2011",
          id: 3
        }
      ];
    res.json(cards);
});

const port = 5000;

app.listen(port, ()=> console.log('Server started on port:' + port));