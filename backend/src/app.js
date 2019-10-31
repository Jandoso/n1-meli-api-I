const express = require('express');
const app = express();

//Rotas
const index = require('./routes/index');
const alunas = require('./routes/alunasRoute');
const professoras = require('./routes/professorasRoute');

app.use(express.json());

app.all('*', (req, res, next) => {
    console.log("É nóis que voa no APP buxão!");
    next();
});

app.use("/", index);
app.use("/alunas", alunas);
app.use("/professoras", professoras);

module.exports = app;