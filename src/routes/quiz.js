var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarPontos/", function (req, res) {
    quizController.cadastrarPontos(req, res);
})

router.get("/buscar/:idUsuarioServer", function (req, res) {
    quizController.buscarPorUsuario(req, res);
});

router.get("/buscarKpis/:idUsuarioServer", function (req, res) {
    quizController.buscarKpis(req, res);
})

router.get("/buscar5Melhores", function (req, res) {
    quizController.buscar5Melhores(req, res);
})


module.exports = router;