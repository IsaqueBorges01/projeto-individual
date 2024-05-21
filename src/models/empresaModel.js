var database = require("../database/config");

function cadastrar(nome, email, assunto, mensagem) {
  console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, assunto, mensagem);
  
  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucaoSql = `
      INSERT INTO contato (nome, email, assunto, mensagem) VALUES ('${nome}', '${email}', '${assunto}','${mensagem}');
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM contato WHERE idContato = '${id}'`;

  return database.executar(instrucaoSql);
}



function listar() {
  var instrucaoSql = `SELECT * FROM contato`;

  return database.executar(instrucaoSql);
}

module.exports = {cadastrar, buscarPorId,listar };
