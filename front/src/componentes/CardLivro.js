function CardLivro(props) {
    return (
        <div className="col">
            <div className="card h-100 shadow-sm border-0">
                <img
                    src={props.foto}
                    className="card-img-top p-3"
                    alt={props.titulo}
                />
                <div className="card-body">
                    <span className="badge bg-primary mb-2">{props.categoria}</span>
                    <h5 className="card-title h6 text-truncate">{props.titulo}</h5>
                    <p className="card-text small text-muted">
                        {props.autor}
                        <br />
                        <small>{props.editora} ({props.publicacao})</small>
                    </p>
                </div>
                <div className="card-footer bg-white border-0 pb-3">
                    <a href={'/emprestar/' + props.idobra} className="btn btn-outline-primary btn-sm w-100">
                        Emprestar
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CardLivro;