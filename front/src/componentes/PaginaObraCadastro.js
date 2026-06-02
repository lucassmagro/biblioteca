import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { get, post, put } from "../servicos/api";

function PaginaObraCadastro() {
    const navegador = useNavigate();
    const { id } = useParams();

    //criar um use state para cada campo do formulário
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [isbn, setIsbn] = useState('');
    const [editora, setEditora] = useState('');
    const [publicacao, setPublicacao] = useState('');
    const [edicao, setEdicao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [foto, setFoto] = useState('');

    const voltar = () => {
        navegador('/obras');
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
            "titulo": titulo,
            "autor": autor,
            "isbn": isbn,
            "editora": editora,
            "publicacao": publicacao,
            "edicao": edicao,
            "categoria": categoria,
            "foto": foto
        }

        try {
            await post('obra', objeto);
            voltar();
        } catch (error) {
            alert('Erro ao inserir: ' + error);
        }
    }

    const alterar = async () => {
        const objeto = {
            "titulo": titulo,
            "autor": autor,
            "isbn": isbn,
            "editora": editora,
            "publicacao": publicacao,
            "edicao": edicao,
            "categoria": categoria,
            "foto": foto
        }

        try {
            await put('obra/' + id, objeto);
            voltar();
        } catch (error) {
            alert('Erro ao inserir: ' + error);
        }
    }

    const selecionar = async () => {
        try {
            const resposta = await get('obra/' + id);
            setTitulo(resposta.titulo);
            setAutor(resposta.autor);
            setIsbn(resposta.isbn);
            setEditora(resposta.editora);
            setPublicacao(resposta.publicacao);
            setEdicao(resposta.edicao);
            setCategoria(resposta.categoria);
            setFoto(resposta.foto);
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
                            <h5 className="mb-0">Dados da nova Obra</h5>
                        </div>
                        <div className="card-body p-4">
                            <>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Título</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required=""
                                        placeholder=""
                                        onChange={(e) => setTitulo(e.target.value)}
                                        value={titulo}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Autor</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required=""
                                        placeholder=""
                                        onChange={(e) => setAutor(e.target.value)}
                                        value={autor}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">ISBN</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required=""
                                        placeholder=""
                                        onChange={(e) => setIsbn(e.target.value)}
                                        value={isbn}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Editora</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required=""
                                        placeholder=""
                                        onChange={(e) => setEditora(e.target.value)}
                                        value={editora}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Ano de publicação</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required=""
                                        placeholder=""
                                        onChange={(e) => setPublicacao(e.target.value)}
                                        value={publicacao}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Edição</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required=""
                                        placeholder=""
                                        onChange={(e) => setEdicao(e.target.value)}
                                        value={edicao}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Categoria</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required=""
                                        placeholder=""
                                        onChange={(e) => setCategoria(e.target.value)}
                                        value={categoria}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Foto</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required=""
                                        placeholder=""
                                        onChange={(e) => setFoto(e.target.value)}
                                        value={foto}
                                    />
                                </div>
                                <img src={foto} className="img-fluid" width={200}></img>
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

export default PaginaObraCadastro;