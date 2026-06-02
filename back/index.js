import Express from "express";
import cors from "cors";
import banco from "./Banco.js";
import aluno from "./controllers/AlunoController.js";
import usuario from "./controllers/UsuarioController.js";
import obra from "./controllers/ObraController.js";
import exemplar from "./controllers/ExemplarController.js";
import emprestimo from "./controllers/EmprestimoController.js";

try {
    await banco.authenticate();
    console.log('Banco conectado com sucesso.');
} catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error);
}

const api = Express();
api.use(Express.json());
api.use(cors());

api.get('/teste', (req, res) => {
    res.send('Api funcionando');
});

api.get('/aluno', aluno.listar);
api.get('/aluno/:matricula', aluno.selecionar);
api.delete('/aluno/:matricula', aluno.excluir);
api.post('/aluno', aluno.inserir);
api.put('/aluno/:matricula', aluno.alterar);

api.get('/usuario', usuario.listar);
api.get('/usuario/:idusuario', usuario.selecionar);
api.delete('/usuario/:idusuario', usuario.excluir);
api.post('/usuario', usuario.inserir);
api.put('/usuario/:idusuario', usuario.alterar);

api.get('/obra', obra.listar);
api.get('/obra/:idobra', obra.selecionar);
api.delete('/obra/:idobra', obra.excluir);
api.post('/obra', obra.inserir);
api.put('/obra/:idobra', obra.alterar);

api.get('/exemplar', exemplar.listar);
api.get('/exemplar/:idexemplar', exemplar.selecionar);
api.delete('/exemplar/:idexemplar', exemplar.excluir);
api.post('/exemplar', exemplar.inserir);

api.get('/emprestimo', emprestimo.listar);
api.get('/emprestimo/:idemprestimo', emprestimo.selecionar);
api.post('/emprestar', emprestimo.emprestar);

api.listen(3001, () => { console.log('Api rodando na porta 3001...') });