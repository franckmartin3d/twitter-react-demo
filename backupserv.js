app.get('/api/list', (req,res)=>{

    const twitterCard = [
    {
      "created_at": "Wed Oct 02 20:32:11 +0000 2019",
      "id": 1179494309365727233,
      "id_str": "1179494309365727233",
      
      "retweeted": false,
      "lang": "en"
  },
  
  
  
    ];
      res.json(twitterCard);
  });