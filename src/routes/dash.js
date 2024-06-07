var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/listar", function (req, res) {
    dashController.listar(req, res);
});

router.get("/totalJogadores", function (req, res) {
    dashController.totalJogadores(req, res);
});

module.exports = router;