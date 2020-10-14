const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

const peopleList = [
  {
    name: 'Scott',
    age: 37,
  },
  {
    name: 'Myron',
    age: 37,
  },
  {
    name: 'Rachael',
    age: 35,
  },
];

app.get('/people/last', (req, res) => {
  res.send(peopleList[peopleList.length - 1]);
});

app.get('/people/first', (req, res) => {
  res.send(peopleList[0]);
});

app.get('/people', (req, res) => {
  res.send(peopleList);
});

app.get('/currency', (req, res) => {
  res.send('Hello Money');
});

app.use(express.static('server/public'));

app.listen(PORT, function () {
  console.log('Listening on PORT: ', PORT);
});
