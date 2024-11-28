var express = require("express");
var router = express.Router();

var votacaoController = require("../controllers/votacaoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/votar/", function (req, res) {
    votacaoController.votar(req, res);
})
router.get("/ultimos", function (req, res) {
    votoController.obterVotosAtualizados(req, res); // invoca a função da controller para "obter os votos atualizados"
});

module.exports = router;