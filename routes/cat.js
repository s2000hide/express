/* const request = require('request');

request('https://api.thecatapi.com/v1/images/search', function (error, response, body) {
if (!error && response.statusCode == 200) {
const data = JSON.parse(body);
console.log(body);
const catImageUrl = data[0].url;
console.log(catImageUrl);
}
}); */

const express= require('express');
const router= express.Router();
const request= require('request');
const cors = require('cors');

// CORSを有効にする
router.use(cors());

router.get('/', async(req, res) =>{
  request('https://api.thecatapi.com/v1/images/search', function(error, response, body) {
    if(!error&& response.statusCode== 200) {
      const data= JSON.parse(body);
      res.json(data);
    } else {
      res.status(500).json({ error: "Failed to fetch cat image" });

    }
  });
})

module.exports= router;