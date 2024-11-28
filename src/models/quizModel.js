var database = require("../database/config");

function buscarPorUsuario(id_usuario) {
  var instrucaoSql = `
SELECT qtd_acertos, qtd_erros, dt_hora FROM quiz
	WHERE fk_usuario = ${id_usuario}
		ORDER BY dt_hora LIMIT 10;`
  ;

  return database.executar(instrucaoSql);
}

function cadastrarPontos(id_usuario, qtd_acertos, qtd_erros, tempofinal) {
  console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarPontos():", id_usuario, qtd_acertos, qtd_erros);
  
  var instrucaoSql = `INSERT INTO quiz (fk_usuario, qtd_acertos, qtd_erros, tempofinal) VALUES (${id_usuario}, ${qtd_acertos}, ${qtd_erros}, '${tempofinal}')`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarKpis(id_usuario) {
  console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarPontos():", id_usuario);
  
  var instrucaoSql = `SELECT COUNT(fk_usuario) as 'QuantidadeDeJogadas', SUM(qtd_acertos) as 'QuantidadeDeAcertos', SUM(qtd_erros) as 'QuantidaDeErros'FROM quiz 
	WHERE fk_usuario = ${id_usuario};`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = { cadastrarPontos, buscarPorUsuario, buscarKpis };
