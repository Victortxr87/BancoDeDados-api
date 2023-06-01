const informacoesRepository = require("../repositories/informacoesRepository");

exports.getInformacoes = async (req, res) => {
   const informacoes = await informacoesRepository.getInformacoes();
   res.json(informacoes);
};

exports.createInformacoes = async (req, res) => {
   const informacoes = req.body;
   const newInformacoes = await informacoesRepository.createInformacoes(informacoes);
   res.json(newInformacoes);
};

exports.updateInformacoes = async (req, res) => {
   
   const informacoes = req.body;
   const updateInformacoes = await informacoesRepository.updateInformacoes(informacoes);
   res.json(updateInformacoes);
};

exports.deleteInformacoes = async (req, res) => {
   await informacoesRepository.deleteInformacoes();
   res.json({ message: `Informações removidas com sucesso!` });
};