var express = require('express');
var path = require('path');
var indexRouter = require('./routes/index');

var app = express();
var port = 3000;

// ----------- Middlewares -----------
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ----------- Routes -----------
app.use('/', indexRouter);

// ----------- Server Setup -----------

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


// ----------- Errors -----------

app.use((req, res, next) => {
  res.status(404).send('Página não encontrada');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

module.exports = app;