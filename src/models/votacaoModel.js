var database = require("../database/config");

function votar(cidade, fk_usuario) {
    var instrucaoSql = `
        INSERT INTO voto VALUES (${fk_usuario}, '${cidade}');
    `;

    return database.executar(instrucaoSql);
  }

function buscarVotos() {
    var instrucaoSql = `SELECT quantidade FROM votos`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
  

module.exports = {
    votar,
    buscarVotos
};