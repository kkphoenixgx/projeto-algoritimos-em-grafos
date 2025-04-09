var express = require('express');
var path = require('path');
var indexRouter = require('./routes/index');

var app = express();

// ----------- Middlewares -----------
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ----------- Routes -----------
app.use('/', indexRouter);

// ----------- Errors -----------

app.use((req, res, next) => {
  res.status(404).send('Página não encontrada');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

module.exports = app;