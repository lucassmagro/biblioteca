import Exemplar from "../models/Exemplar.js";
import Obra from "../models/Obra.js";

async function listar(req, res) {
    const dados = await Exemplar.findAll();
    return res.json(dados);
}

async function selecionar(req, res) {
    const idexemplar = req.params.idexemplar;
    const dados = await Exemplar.findByPk(idexemplar);
    return res.json(dados);
}

async function excluir(req, res) {
    const idexemplar = req.params.idexemplar;
    const dados = await Exemplar.destroy({ where: { idexemplar: idexemplar } });
    return res.json(dados);
}

async function inserir(req, res) {
    const idobra = req.body.idobra;

    //verificar se a obra não existe
    const obra = await Obra.findByPk(idobra);
    if (!obra) {
        return res.status(404).send('Obra não encontrada.');
    }

    const dados = await Exemplar.create({
        idobra: idobra
    });

    return res.json(dados);
}

export default { listar, selecionar, excluir, inserir };