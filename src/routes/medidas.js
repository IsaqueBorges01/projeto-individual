var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

// Rota para buscar as últimas medidas
router.get("/ultimas/:idPontuacao", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

// Rota para buscar as medidas em tempo real
router.get("/tempo-real/:idPontuacao", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
});

router.post("/guardarPontuacao", function (req, res) {
    medidaController.guardarPontuacao(req, res);
});



module.exports = router;
