const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(req.query.x);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});