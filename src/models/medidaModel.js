var database = require("../database/config");


function buscarUltimasMedidas(idPontuacao, limite_linhas) {
    const query = `
    SELECT * FROM medida WHERE idPontuacao = ${idPontuacao} ORDER BY momento DESC LIMIT ${limite_linhas}
    `;
    return database.query(query, [idPontuacao, limite_linhas]);
}

function buscarMedidasEmTempoReal(idPontuacao) {
    const query = `
    SELECT * FROM medida WHERE idPontuacao = ${idPontuacao} ORDER BY momento DESC LIMIT 1
    `;
    return database.query(query, [idPontuacao]);
}

function guardarPontuacao(score, totalQuestions, fkUsuario) {
    var instrucao = `INSERT INTO pontuacao (score, totalQuestions, fkUsuario) VALUES (${score}, ${totalQuestions}, ${fkUsuario})`

    return database.executar(instrucao);

}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    guardarPontuacao
};
