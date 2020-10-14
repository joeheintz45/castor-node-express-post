const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/currency', (req, res) => {
  res.send('Hello Money');
});

app.use(express.static('server/public'));

app.listen(PORT, function () {
  console.log('Listening on PORT: ', PORT);
});
