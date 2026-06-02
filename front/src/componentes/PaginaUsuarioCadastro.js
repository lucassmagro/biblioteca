import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { get, post, put } from "../servicos/api";

function PaginaUsuarioCadastro() {
    const navegador = useNavigate();
    const { id } = useParams();

    //criar um use state para cada campo do formulário
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [matricula, setMatricula] = useState('');
    const [perfil, setPerfil] = useState(0);
    const [status, setStatus] = useState(1);


    const voltar = () => {
        navegador('/usuarios');
    }

    const salvar = async () => {
        if (id) {
            alterar();
        }
        else {
            inserir();
        }
    }

    const inserir = async () => {
        const objeto = {
            "nome": nome,
            "email": email,
            "perfil": perfil,
            "matricula": matricula,
            "status": status
        }

        try {
            await post('usuario', objeto);
            voltar();
        } catch (error) {
            alert('Erro ao inserir: ' + error);
        }
    }

    const alterar = async () => {
        const objeto = {
            "nome": nome,
            "email": email,
            "perfil": perfil,
            "matricula": matricula,
            "status": status
        }

        try {
            await put('usuario/' + id, objeto);
            voltar();
        } catch (error) {
            alert('Erro ao inserir: ' + error);
        }
    }

    const selecionar = async () => {
        try {
            const resposta = await get('usuario/' + id);
            setNome(resposta.nome);
            setMatricula(resposta.matricula);
            setEmail(resposta.email);
            setPerfil(resposta.perfil);
            setStatus(resposta.status);
        } catch (error) {

        }
    }

    useEffect(() => {
        if (id)
            selecionar();
    }, []);

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="card shadow border-0">
                        <div className="card-header bg-primary text-white py-3">
                            <h5 className="mb-0">Dados do Novo Usuário</h5>
                        </div>
                        <div className="card-body p-4">
                            <>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Nome</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required=""
                                        placeholder="Nome completo"
                                        onChange={(e) => setNome(e.target.value)}
                                        value={nome}
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-bold">Matrícula</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            required=""
                                            placeholder="Apenas números"
                                            onChange={(e) => setMatricula(e.target.value)}
                                            value={matricula}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-bold">Perfil</label>
                                        <select className="form-select"
                                            onChange={(e) => setPerfil(e.target.value)}
                                            value={perfil}>
                                            <option value={0}>Leitor</option>
                                            <option value={1}>Bibliotecário</option>
                                            <option value={2}>Administrador</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label fw-bold">E-mail</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        required=""
                                        placeholder="exemplo@gmail.com"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                    />
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <a onClick={(e) => voltar()} className="btn btn-link text-muted">
                                        Voltar para a lista
                                    </a>
                                    <button onClick={(e) => salvar()} className="btn btn-primary px-5">
                                        Salvar
                                    </button>
                                </div>
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaginaUsuarioCadastro;