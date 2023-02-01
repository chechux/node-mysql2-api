var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("hola");
});


router.get('/employes', function(req, res, next) {
  res.send("Obteniendo empleados...");
});

router.post('/employes', function(req, res, next) {
  res.send("Creando empleados...");
});

router.put('/employes', function(req, res, next) {
  res.send("Actualizando empleados...");
});

router.delete('/employes', function(req, res, next) {
  res.send("Eliminando empleados");
});
module.exports = router;
