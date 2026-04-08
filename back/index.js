import Express from "express";
import banco from "./Banco.js";
import AlunoController from "./controllers/AlunoController.js";
import UsuarioController from "./controllers/UsuarioController.js";

// teste de conexao
try {
  await banco.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const api = Express();
api.use(Express.json());

api.get("/teste", (req, res) => {
  res.send("Api funcionando");
});

api.get("/aluno", AlunoController.listar);
api.get("/aluno/:matricula", AlunoController.selecionar);
api.delete("/aluno/:matricula", AlunoController.excluir);
api.post("/aluno", AlunoController.inserir);
api.put("/aluno/:matricula", AlunoController.alterar);

api.get("/usuario", UsuarioController.listar);
api.get("/usuario/:idusuario", UsuarioController.selecionar);
api.delete("/usuario/:idusuario", UsuarioController.excluir);
api.post("/usuario", UsuarioController.inserir);
api.put("/usuario/:idusuario", UsuarioController.alterar);

api.listen(3000, () => {
  console.log("Api rodando...");
});

// crud é um conjunto de operacoes basicas que fazemos em uma tabela no banco de dados
// put serve para atualizar
