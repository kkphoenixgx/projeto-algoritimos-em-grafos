var express = require('express');
const execC = require('../microservices/execC');
var router = express.Router();

router.get('/', function(req, res, next) {
  return res.sendFile('../public/index.html');
});
router.get('/execTest', async function (req, res, next) {
  try {
    const json = await execC.getTest();
    res.status(200).json({ testResponse: json });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao executar o script em C' });
  }
});
module.exports = router;
