import { useEffect, useState } from "react";
import CardLivro from "./CardLivro";
import { get } from "../servicos/api";

function PaginaCatalogo() {
    //essa variável vai receber o array de livros do servidor
    const [dados, setDados] = useState([]);

    //essa função vai disparar a requisição get /obra para o back-end e carregar o array 
    //de resposta na variável dados
    const listar = async () => {
        try {
            const resposta = await get('obra');
            setDados(resposta);
        } catch (error) {
            alert("Erro ao listar: " + error);
        }
    }

    //esse useEffect será executado somente uma vez quando a PaginaCatalogo for acessada
    useEffect(() => {
        listar();
    }, []);

    return (
        <div className="container my-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>
                    <i className="bi bi-collection me-2" />
                    Nosso Acervo
                </h2>
                <div className="input-group w-50">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Pesquisar por título, autor ou categoria..."
                    />
                    <button className="btn btn-primary">
                        <i className="bi bi-search" />
                    </button>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4">
                {dados.map((d, i) => (
                    <CardLivro foto={d.foto} titulo={d.titulo} autor={d.autor}
                        categoria={d.categoria} editora={d.editora}
                        publicacao={d.publicacao} idobra={d.idobra} />
                ))}
            </div>
        </div>

    );
}

export default PaginaCatalogo;