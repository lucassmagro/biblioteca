import Exemplar from "../models/Exemplar.js";

// Busca todos os exemplares cadastrados
async function listar(req, res) {
  const dados = await Exemplar.findAll();
  return res.json(dados);
}

// Busca um exemplar específico pela Chave Primária (idexemplar)
async function selecionar(req, res) {
  const idexemplar = req.params.idexemplar;
  const dados = await Exemplar.findByPk(idexemplar);
  return res.json(dados);
}

// Deleta um exemplar baseado no ID passado na URL
async function excluir(req, res) {
  const idexemplar = req.params.idexemplar;
  const dados = await Exemplar.destroy({ where: { idexemplar: idexemplar } });
  return res.json(dados);
}

// Cria um novo exemplar.
// Lembre-se: o 'idexemplar' é auto-incremento e o 'status' tem default 0,
// então enviamos apenas o 'idobra' pelo Insomnia.
async function inserir(req, res) {
  const idobra = req.body.idobra;
  const status = req.body.status; // Opcional no envio, mas pegamos caso venha

  const dados = await Exemplar.create({
    idobra: idobra,
    status: status,
  });

  return res.json(dados);
}

// Atualiza os dados (geralmente usado para mudar o status de 0 para 1, por exemplo)
async function alterar(req, res) {
  const idexemplar = req.params.idexemplar; // ID vem da URL

  const idobra = req.body.idobra; // Novos dados vêm do Body (Insomnia)
  const status = req.body.status;

  const dados = await Exemplar.update(
    { idobra: idobra, status: status },
    { where: { idexemplar: idexemplar } },
  );
  return res.json(dados);
}

// Exporta todas as funções agrupadas
export default { listar, selecionar, excluir, inserir, alterar };
