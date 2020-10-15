const express = require('express');
const bodyParser = require('body-parser'); // have imported new dependency
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

// NEW CONFIGURATION FOR APP
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// GET > POST > GET

// SAVE DATA
app.post('/people', (req, res) => {
  // what happens here?????
  console.log(req.body);
  peopleList.push(req.body);
  res.sendStatus(201); // 201 = created
  // 200 = OK
  // 201 = Created
  // 404 = not found
  // 500 = Internal Sever Error
});

app.get('/people/last', (req, res) => {
  res.send(peopleList[peopleList.length - 1]);
});

app.get('/people/first', (req, res) => {
  res.send(peopleList[0]);
});

app.get('/people', (req, res) => {
  res.send(peopleList);
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Listening on PORT: ', PORT);
});
