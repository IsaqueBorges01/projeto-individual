var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/listar", function (req, res) {
    dashController.listar(req, res);
});

module.exports = router;