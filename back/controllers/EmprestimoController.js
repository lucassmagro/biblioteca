import Emprestimo from "../models/Emprestimo.js";
import Exemplar from "../models/Exemplar.js";
import Usuario from "../models/Usuario.js";
import moment from "moment/moment.js";

// Lista todos os empréstimos
async function listar(req, res) {
  const dados = await Emprestimo.findAll();
  return res.json(dados);
}

// Retorna apenas 1 empréstimo específico
async function selecionar(req, res) {
  const idemprestimo = req.params.idemprestimo;
  const dados = await Emprestimo.findByPk(idemprestimo);
  return res.json(dados);
}

// Registra que um aluno pegou um livro.
async function emprestar(req, res) {
  // Pegamos as chaves estrangeiras e as datas do JSON do Insomnia
  const idexemplar = req.body.idexemplar;
  const idusuario = req.body.idusuario;
  // A data de 'emprestimo' não precisa ser pega aqui, o banco preenche sozinho

  // verificar se o exemplar não existe
  const exemplar = await Exemplar.findByPk(idexemplar);
  if (!exemplar) {
    return res.status(404).send("Exemplar não encontrado.");
  }

  //data de emprestimo
  const emprestimo = moment().format("YYYY-MM-DD");

  //data de vencimento com +7 dias
  const vencimento = moment().add(7, "days").format("YYYY-MM-DD");

  //verificar se o exemplar já está emprestado
  if (exemplar.status === 1) {
    // significa que ja esta emprestado
    return res.status(400).send("Exemplar já emprestado para outro usuário.");
  }

  // verificar se o usuario não existe
  const usuario = await Usuario.findByPk(idusuario);
  if (!usuario) {
    return res.status(404).send("Usuário não encontrado.");
  }

  const dados = await Emprestimo.create({
    idexemplar: idexemplar,
    idusuario: idusuario,
    emprestimo: emprestimo,
    vencimento: vencimento,
  });

  exemplar.update({ status: 1 });

  return res.json(dados);
}

export default { listar, selecionar, emprestar };
