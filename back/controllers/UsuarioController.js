import Usuario from "../models/Usuario.js";

async function listar(req, res) {
  const dados = await Usuario.findAll();
  return res.json(dados);
}

async function selecionar(req, res) {
  const idusuario = req.params.idusuario;
  // o ideal seria validar se é um numero inteiro
  const dados = await Usuario.findByPk(idusuario); // idusario é a pk
  return res.json(dados);
}

async function excluir(req, res) {
  const idusario = req.params.idusario;
  const dados = await Usuario.destroy({ where: { idusario: idusario } });
  return res.json(dados);
}

async function inserir(req, res) {
  const nome = req.body.nome;
  const matricula = req.body.matricula;
  const email = req.body.email;
  const perfil = req.body.perfil;
  const status = req.body.status;

  const dados = await Aluno.create({
    nome: nome,
    matricula: matricula,
    email: email,
    perfil: perfil,
    status: status,
  });
  return res.json(dados);
}

async function alterar(req, res) {
  // metodo misto
  //route
  const idusuario = req.params.idusario;
  //body
  const nome = req.body.nome;
  const matricula = req.body.matricula;
  const email = req.body.email;
  const perfil = req.body.perfil;
  const status = req.body.status;

  const dados = await Usuario.update(
    {
      nome: nome,
      email: email,
      matricula: matricula,
      perfil: perfil,
      status: status,
    },
    { where: { idusario: idusuario } },
  );
  return res.json(dados);
}

export default { listar, selecionar, excluir, inserir, alterar };
