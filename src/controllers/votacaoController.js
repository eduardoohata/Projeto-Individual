var votacaoModel = require("../models/votacaoModel");

function votar(req, res) {
    var fk_usuario = req.body.fk_usuarioServer;
    var cidade = req.body.cidadeServer;

    console.log(fk_usuario);

    votacaoModel.votar(cidade, fk_usuario).then((resultado) => {
        res.status(200).json(resultado);
    });
}
function obterVotosAtualizados(req, res) {
    console.log(`Buscando os votos...`);
  
    votacaoModel.buscarVotos()                                     // invoca a função da model para buscar os votos
      .then(function (resultado) {                              // ENTÃO, obtém o resultado após retornar a execução da query SQL na model
        if (resultado.length > 0) {                             // - verifica se obteve resultados
          console.log(resultado);                               // -- exibe no console o resultado obtido
          res.status(200).json(resultado);                      // -- retorna o status 200 (OK) com os dados formatados em JSON
        } else {                                                // - caso não obtenha resultados
          res.status(204).send("Nenhum resultado encontrado!"); // -- retorna o status 204 (Not Found) com a mensagem "Nenhum resultado encontrado!"
        }
      })
      .catch(function (erro) {                                             // CAPTURA qualquer erro ocorrido durante a execução da query para a busca dos votos
        console.log(erro);                                                 // exibe o JSON contendo as informações do erro ocorrido
        console.log("Houve um erro ao buscar os votos.", erro.sqlMessage); // exibe a mensagem do erro ocorrido
        res.status(500).json(erro.sqlMessage);                             // retorna o status 500 (Erro) com a mensagem do erro ocorrido
      });
  }


  function verificarVoto(req, res) {
    var fk_usuario = req.params.fk_usuario;

    console.log(fk_usuario);

    votacaoModel.verificarVoto(fk_usuario).then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum voto encontrado!")
        }
    });
}

  
module.exports = {
    votar,
    verificarVoto,
    obterVotosAtualizados
};