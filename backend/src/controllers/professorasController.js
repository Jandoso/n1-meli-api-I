const professoras = require('../model/professoras.json');

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