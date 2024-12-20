const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// ミドルウェア設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// 投稿を保存するための一時的なデータベース（配列）
let posts = [];

// ホームページ
app.get('/', (req, res) => {
  res.render('index', { posts });
});

// 新規投稿の処理
app.post('/add-post', (req, res) => {
  const { title, content } = req.body;
  if (title && content) {
    posts.push({ title, content });
  }
  res.redirect('/');
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
