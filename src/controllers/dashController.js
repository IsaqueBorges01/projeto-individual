var dashModel = require("../models/dashModel");

function listar(req, res) {
    dashModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
        console.log("chegouususu")
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function totalJogadores(req, res) {
    dashModel.totalJogadores().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json({ totalJogadores: resultado[0].totalJogadores });
        } else {
            res.status(204).send("Nenhum jogador encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a quantidade de jogadores: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listar,
    totalJogadores
}