var database = require("../database/config");

function votar(cidade, fk_usuario) {
    var instrucaoSql = `
        INSERT INTO voto VALUES (${fk_usuario}, '${cidade}');
    `;

    return database.executar(instrucaoSql);
  }

function buscarVotos() {
    var instrucaoSql = `SELECT
	(SELECT COUNT(cidade) FROM voto where cidade = 'nara') AS nara,
    (SELECT COUNT(cidade) FROM voto where cidade = 'koyasan') AS koyasan,
    (SELECT COUNT(cidade) FROM voto where cidade = 'mtfuji') AS mtfuji,
    (SELECT COUNT(cidade) FROM voto where cidade = 'hiroshima') AS hiroshima,
    (SELECT COUNT(cidade) FROM voto where cidade = 'kyoto') AS kyoto;`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function verificarVoto (fk_usuario) {
    
    var instrucaoSql = `SELECT * FROM voto WHERE fk_usuario = ${fk_usuario} `


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql); 
}
  

module.exports = {
    votar,
    verificarVoto,
    buscarVotos
};