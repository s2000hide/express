var express= require('express');
var router = express.Router();
// 修正


// 接続情報を設定
const{ MongoClient} = require("mongodb");
const uri = "xxxxxxxxxx"; // MongoDBの接続URIを指定
const client = new MongoClient(uri);

router.get('/', async(req, res) => {
// データベース、コレクションを指定
const database = client.db('notes');
const notes = database.collection('notes');

// idが１のドキュメントを取得
const query = { id: 2 };
const note = await notes.findOne(query);

res.json(note.title);
})

module.exports= router;

