var express = require('express');
var router = express.Router();
const cors = require('cors'); // corsミドルウェアを追加
// 環境変数を使用するためのdotenvを読み込む
require('dotenv').config();


// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri = process.env.mongodb_URI; // .envファイルからURIを取得
const client = new MongoClient(uri);

// corsミドルウェアを使用
router.use(cors());

router.get('/', async (req, res) => {
// データベース、コレクションを指定
const database = client.db('notes');
const notes = database.collection('notes');


// 全てのドキュメントを取得
const note = await notes.find({}).toArray();

res.json(note);
})

module.exports = router;