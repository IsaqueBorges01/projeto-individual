var empresaModel = require("../models/empresaModel");

function listar(req, res) {
  empresaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var idContato = req.params.idContato;

  empresaModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var nomeVar = req.body.nomeServer;
  var emailVar = req.body.emailServer;
  var assuntoVar = req.body.assuntoServer;
  var mensagemVar = req.body.mensagemServer

  // Faça as validações dos valores
  if (nomeVar == undefined) {
      res.status(400).send("Seu nome está undefined!");
  } else if (emailVar == undefined) {
      res.status(400).send("Seu email está undefined!");
  } else if (assuntoVar == undefined) {
      res.status(400).send("Seu assunto está undefined!");
  } else if (mensagemVar == undefined) {
    res.status(400).send("Sua mensagem está undefined!");
} else {

      // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
      empresaModel.cadastrar(nomeVar, emailVar, assuntoVar, mensagemVar)
          .then(
              function (resultado) {
                  res.json(resultado);
              }
          ).catch(
              function (erro) {
                  console.log(erro);
                  console.log(
                      "\nHouve um erro ao enviar a mensagem! Erro: ",
                      erro.sqlMessage
                  );
                  res.status(500).json(erro.sqlMessage);
              }
          );
  }
}


module.exports = {
  cadastrar,
  buscarPorId,
  listar,
};
