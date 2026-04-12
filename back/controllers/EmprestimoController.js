import Emprestimo from "../models/Emprestimo.js";

// Lista todos os empréstimos
async function listar(req, res) {
  const dados = await Emprestimo.findAll();
  return res.json(dados);
}

// Traz apenas 1 empréstimo específico
async function selecionar(req, res) {
  const idemprestimo = req.params.idemprestimo;
  const dados = await Emprestimo.findByPk(idemprestimo);
  return res.json(dados);
}

// Apaga o registro do empréstimo
async function excluir(req, res) {
  const idemprestimo = req.params.idemprestimo;
  const dados = await Emprestimo.destroy({
    where: { idemprestimo: idemprestimo },
  });
  return res.json(dados);
}

// Registra que um aluno pegou um livro.
async function inserir(req, res) {
  // Pegamos as chaves estrangeiras e as datas do JSON do Insomnia
  const idexemplar = req.body.idexemplar;
  const idusuario = req.body.idusuario;
  const vencimento = req.body.vencimento;
  // A data de 'emprestimo' não precisa ser pega aqui, o banco preenche sozinho!

  const dados = await Emprestimo.create({
    idexemplar: idexemplar,
    idusuario: idusuario,
    vencimento: vencimento,
  });

  return res.json(dados);
}

// Geralmente usado para registrar a devolução do livro (preencher o campo 'devolucao')
async function alterar(req, res) {
  const idemprestimo = req.params.idemprestimo;

  const idexemplar = req.body.idexemplar;
  const idusuario = req.body.idusuario;
  const vencimento = req.body.vencimento;
  const devolucao = req.body.devolucao; // Quando o aluno devolver, mandamos a data aqui

  const dados = await Emprestimo.update(
    {
      idexemplar: idexemplar,
      idusuario: idusuario,
      vencimento: vencimento,
      devolucao: devolucao,
    },
    { where: { idemprestimo: idemprestimo } },
  );

  return res.json(dados);
}

export default { listar, selecionar, excluir, inserir, alterar };
