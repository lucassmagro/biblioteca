import Express from "express";
import banco from "./Banco.js";
import aluno from "./controllers/AlunoController.js";
import usuario from "./controllers/UsuarioController.js";
import obra from "./controllers/ObraController.js";
import exemplar from "./controllers/ExemplarController.js";
import emprestimo from "./controllers/EmprestimoController.js";

try {
  await banco.authenticate();
  console.log("Banco conectado com sucesso.");
} catch (error) {
  console.error("Erro ao conectar com o banco de dados:", error);
}

const api = Express();
api.use(Express.json()); // Permite que a API entenda os JSONs do Insomnia

// Rota de teste
api.get("/teste", (req, res) => {
  res.send("Api funcionando");
});

// ROTAS DE ALUNO
api.get("/aluno", aluno.listar);
api.get("/aluno/:matricula", aluno.selecionar);
api.delete("/aluno/:matricula", aluno.excluir);
api.post("/aluno", aluno.inserir);
api.put("/aluno/:matricula", aluno.alterar);

// ROTAS DE USUÁRIO
api.get("/usuario", usuario.listar);
api.get("/usuario/:idusuario", usuario.selecionar);
api.delete("/usuario/:idusuario", usuario.excluir);
api.post("/usuario", usuario.inserir);
api.put("/usuario/:idusuario", usuario.alterar);

// ROTAS DE OBRA
api.get("/obra", obra.listar);
api.get("/obra/:idobra", obra.selecionar);
api.delete("/obra/:idobra", obra.excluir);
api.post("/obra", obra.inserir);
api.put("/obra/:idobra", obra.alterar);

// ROTAS DE EXEMPLAR
api.get("/exemplar", exemplar.listar);
api.get("/exemplar/:idexemplar", exemplar.selecionar);
api.delete("/exemplar/:idexemplar", exemplar.excluir);
api.post("/exemplar", exemplar.inserir);
api.put("/exemplar/:idexemplar", exemplar.alterar);

// ROTAS DE EMPRÉSTIMO
api.get("/emprestimo", emprestimo.listar);
api.get("/emprestimo/:idemprestimo", emprestimo.selecionar);
api.delete("/emprestimo/:idemprestimo", emprestimo.excluir);
api.post("/emprestimo", emprestimo.inserir);
api.put("/emprestimo/:idemprestimo", emprestimo.alterar);

// Liga o servidor
api.listen(3000, () => {
  console.log("Api rodando na porta 3000...");
});
