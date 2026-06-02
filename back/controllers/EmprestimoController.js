import Emprestimo from "../models/Emprestimo.js";
import Exemplar from "../models/Exemplar.js";
import Usuario from "../models/Usuario.js";
import moment from "moment";

async function listar(req, res) {
    const dados = await Emprestimo.findAll();
    return res.json(dados);
}

async function selecionar(req, res) {
    const idemprestimo = req.params.idemprestimo;
    const dados = await Emprestimo.findByPk(idemprestimo);
    return res.json(dados);
}

async function emprestar(req, res) {
    const idexemplar = req.body.idexemplar;
    const idusuario = req.body.idusuario;

    //verificar se o exemplar não existe
    const exemplar = await Exemplar.findByPk(idexemplar);
    if (!exemplar) {
        return res.status(404).send('Exemplar não encontrado.');
    }
    //verificar se o exemplar já está emprestado
    if (exemplar.status === 1) {
        return res.status(400).send('Exemplar já emprestado para outro usuário.');
    }
    //verificar se o usuário não existe
    const usuario = await Usuario.findByPk(idusuario);
    if (!usuario) {
        return res.status(404).send('Usuário não encontrado.');
    }
    const dias = 7;
    if (usuario.perfil === 0) {
        dias = 7;
    } else if (usuario.perfil === 1) {
        dias = 15;
    }

    //data de emprestimo
    const emprestimo = moment().format('YYYY-MM-DD');
    //data de vencimento com +7 dias
    const vencimento = moment().add(dias, 'days').format('YYYY-MM-DD');

    const dados = await Emprestimo.create({
        idexemplar: idexemplar,
        idusuario: idusuario,
        vencimento: vencimento,
        emprestimo: emprestimo
    });

    exemplar.update({ status: 1 });

    return res.json(dados);
}

export default { listar, selecionar, emprestar };