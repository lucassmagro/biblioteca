function CardLivro() {
  return (
    <div classname="col">
      <div classname="card h-100 shadow-sm border-0">
        <img
          src="https://covers.openlibrary.org/b/isbn/9788550804606-L.jpg"
          classname="card-img-top p-3"
          alt="Arquitetura Limpa"
        />
        <div classname="card-body">
          <span classname="badge bg-primary mb-2">Programação</span>
          <h5 classname="card-title h6 text-truncate">Arquitetura Limpa</h5>
          <p classname="card-text small text-muted">
            Robert C. Martin
            <br />
            <small>Alta Books (2019)</small>
          </p>
        </div>
        <div classname="card-footer bg-white border-0 pb-3">
          <button classname="btn btn-outline-primary btn-sm w-100">
            Disponibilidade
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardLivro;
