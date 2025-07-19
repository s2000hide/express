var express = require('express');
var router = express.Router();
const cors = require('cors'); // corsミドルウェアを追加


// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://2101140507py:S2000ap1@cluster0.qipzhju.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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