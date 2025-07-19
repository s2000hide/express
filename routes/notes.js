var express= require('express');
var router = express.Router();
// 修正


// 接続情報を設定
const{ MongoClient} = require("mongodb");
const uri = "mongodb+srv://2101140507py:S2000ap1@cluster0.qipzhju.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // MongoDBの接続URIを指定
const client = new MongoClient(uri);

router.get('/', async(req, res) => {
  // データベース、コレクションを指定
  const database = client.db('notes');
  const notes = database.collection('notes');

  // idが１のドキュメントを取得
  const query = { id: 1 };
  const note = await notes.findOne(query);

  if (note) {
    res.json(note.title);
  } else {
    res.status(404).json({ error: "Note not found" });
  }
})

module.exports= router;

