require ('dotenv').config();
const express = require('express');
const {initDatabase } = require('./config/db');
const cors = require('cors');

const experienciasRoute = require('./routes/experienciasRoute');
const portfolioRoute = require('./routes/portfolioRoute');
const informacoesRoute = require("./routes/informacoesRoute");
const authRoute = require("./routes/AuthRoute");


const app = express();

const port = process.env.APP_PORT || 5000;

app.get('/', (req, res) => {

    res.send('Bem vindo a api do meu site pessoal');

});

app.use(cors());

app.use(express.json());

app.use('/api/experiencias', experienciasRoute);
app.use('/api/portfolio', portfolioRoute);
app.use("/api/informacoes", informacoesRoute);
app.use("/api/auth", authRoute);

initDatabase();

app.listen(port, () => {

    console.log(`Servidor rodando na porta ${port}`);

});

