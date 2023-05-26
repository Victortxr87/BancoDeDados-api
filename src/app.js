require ('dotenv').config();
const express = require('express');
const {initDatabase } = require('./config/db');
const experienciasRoute = require('./routes/experienciasRoute');

const app = express();

const port = process.env.APP_PORT || 5000;

app.get('/', (req, res) => {

    res.send('Bem vindo a api do meu site pessoal');

});


app.use('/api/experiencias', experienciasRoute);

initDatabase();

app.listen(port, () => {

    console.log(`Servidor rodando na porta ${port}`);

});

