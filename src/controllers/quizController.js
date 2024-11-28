const e = require("express");
var quizModel = require("../models/quizModel");

function buscarPorUsuario(req, res) {
  var id_usuario = req.params.idUsuarioServer;

  quizModel.buscarPorUsuario(id_usuario).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrarPontos(req, res) {
  var qtd_acertos = req.body.qtd_acertosFinalServer
  var qtd_erros = req.body.qtd_errosFinalServer
  var id_usuario = req.body.id_usuarioFinalServer
  var tempofinal = req.body.tempoFinalServer
  console.log(tempofinal + 'Estou tentando coontar o tempo')
  console.log('Estou no cadastrar Pontox')
  quizModel.cadastrarPontos(id_usuario, qtd_acertos, qtd_erros, tempofinal).then((resultado) => {
        res.status(201).json(resultado);
    
  });
}

function buscarKpis(req, res) {
  var id_usuario = req.params.idUsuarioServer;

  quizModel.buscarKpis(id_usuario).then((resultado) => {
    res.status(200).json(resultado);
  });
}

module.exports = {
  buscarPorUsuario,
  cadastrarPontos,
  buscarKpis
};
