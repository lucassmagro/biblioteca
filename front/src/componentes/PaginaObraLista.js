import { get, del } from "../servicos/api";
import { useEffect, useState } from "react";

function PaginaObraLista() {
    const [dados, setDados] = useState([]);

    const listar = async () => {
        try {
            const resposta = await get('obra');
            setDados(resposta);
        } catch (error) {
            alert("Erro ao listar: " + error);
        }
    }

    const excluir = async (id) => {
        if (!window.confirm('Deseja excluir o registro agora?')) {
            return;
        }

        try {
            const resposta = await del('obra/' + id);
            if (resposta === 1) {
                alert('Excluído com sucesso.');
                listar();
            }
            else {
                alert('Registro não excluído.');
            }
        } catch (error) {
            alert("Erro ao excluir: " + error);
        }
    }

    useEffect(() => {
        listar();
    }, []);

    return (
        <div className="container my-5">
            <div className="card shadow-sm border-0">
                <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
                    <h4 className="mb-0 text-primary">Obras Cadastradas</h4>
                    <a href="/obra" className="btn btn-success">
                        <i className="bi bi-plus-circle me-2" />
                        Novo
                    </a>
                </div>
                <div className="card-body p-0">
                    <table className="table table-hover align-middle mb-0">
                        <thead className="table-light">
                            <tr>
                                <th className="ps-4">ID</th>
                                <th>Foto</th>
                                <th>Título</th>
                                <th>Autor</th>
                                <th>Categoia</th>
                                <th className="text-center">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dados.map((d, i) => (
                                <tr>
                                    <td className="ps-4">{d.idobra}</td>
                                    <td><img src={d.foto} className="img-fluid" width={100}></img></td>
                                    <td>{d.titulo}</td>
                                    <td>
                                        <code>{d.autor}</code>
                                    </td>
                                    <td>{d.categoria}</td>
                                    <td className="text-center">
                                        <div className="btn-group">
                                            <a
                                                href={'/obra/' + d.idobra}
                                                className="btn btn-sm btn-outline-warning"
                                                title="Editar Obra"
                                            >
                                                <i className="bi bi-pencil" /> Editar
                                            </a>
                                            <button
                                                className="btn btn-sm btn-outline-danger"
                                                title="Excluir"
                                                onClick={() => excluir(d.idobra)}
                                            >
                                                Excluir
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}

export default PaginaObraLista;