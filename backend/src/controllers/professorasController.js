const professoras = require('../model/professoras.json');
const fs = require('fs');

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(professoras);
}

exports.getNomes = (req, res) => {
    const nomesProfessoras = professoras.map(professora => professora.nome)
    res.status(200).send(nomesProfessoras)
}

exports.getLinguagens = (req, res) => {
    const linguagens = professoras.map(professora => professora.especialidade)
    res.status(200).send(linguagens)
}

exports.getSignos = (req, res) => {
    const signos = professoras.map(professora => professora.signo)
    res.status(200).send(signos)
}

exports.post = (req, res) => {
    const { nome, especialidade, signo } = req.body;
    professoras.push({ nome, especialidade, signo });

    fs.writeFile('./src/model/professoras.json', JSON.stringify(professoras), 'utf8', function(err){
        if(err){
            return res.status(500).send( { message: err });
        }
        console.log("O arquivo foi salvo com sucesso!");
    });

    return res.status(201).send(professoras);
};