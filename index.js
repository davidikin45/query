const express = require('express');
const url = require('url');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(url.parse(req.url).query);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});