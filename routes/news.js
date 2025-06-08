var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', async function(req, res, next) {
  try {
    // News APIから米国のスポーツニュースを取得
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=b7736cf2ba5d40b7812f53e784208f30`);
    
    // urlToImageが存在する記事のみをフィルタリング
    const articlesWithImages = response.data.articles.filter(article => 
      article.urlToImage && article.urlToImage.trim() !== ''
    );
    
    // ランダムに1つ選択
    const randomIndex = Math.floor(Math.random() * articlesWithImages.length);
    const selectedArticle = articlesWithImages[randomIndex];
    
    // 画像のみを表示するHTML
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { 
            margin: 0; 
            padding: 0; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            min-height: 100vh; 
          }
          img { 
            max-width: 100%; 
            max-height: 100vh; 
          }
        </style>
      </head>
      <body>
        <img src="${selectedArticle.urlToImage}" alt="ニュース画像">
      </body>
      </html>
    `;
    
    res.send(html);
    
  } catch (error) {
    console.error('News API エラー:', error.message);
    res.send(`<p>エラー: ${error.message}</p>`);
  }
});

module.exports = router;