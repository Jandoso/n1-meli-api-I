const alunas = require('../model/alunas.json');

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(alunas)
};

exports.getById = (req,res) => {
    const id = req.params.id
    if(id > alunas.length || id <= 0){
        res.redirect(301, "https://en.wikipedia.org/wiki/Man-in-the-middle_attack")
    }
    res.status(200).send(alunas.find(aluna => aluna.id == id))
}

exports.getBooks = (req, res) => {
    const id = req.params.id
    const aluna = alunas.find(aluna => aluna.id == id)
    if(!aluna){
        res.send("Aluna não encontrada")
    }
    const livrosAluna = aluna.livros
    const titulosLivros = livrosAluna.map(livro => livro.titulo)
    res.status(200).send(titulosLivros)
} 

exports.getSp = (req, res) => {
   const nascidasSp = alunas.filter(aluna => aluna.nasceuEmSp == "true")
   const nomesPaulistas = nascidasSp.map(paulista => paulista.nome)
   res.status(200).send(nomesPaulistas)
}

function calcularIdade(anoDeNasc, mesDeNasc, diaDeNasc) {
      const now = new Date()
      const anoAtual = now.getFullYear()
      const mesAtual = now.getMonth() + 1
      const hoje = now.getDate()
    
      let idade = anoAtual - anoDeNasc
    
      if (mesAtual < mesDeNasc || (mesAtual == mesDeNasc && hoje < diaDeNasc)) {
        idade -= 1
      }
      return idade
    }
    

exports.getIdade = (req, res) => {
    const id = req.params.id
    const aluna = alunas.find(aluna => aluna.id == id)
    const nascimento = aluna.dateOfBirth
    const dataDeNascimento = nascimento.split("/")
    const idade = calcularIdade(dataDeNascimento[2], dataDeNascimento[1], dataDeNascimento[0])
    res.status(200).send(`A aluna tem ${idade} anos`)
}


    