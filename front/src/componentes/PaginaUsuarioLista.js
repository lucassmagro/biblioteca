function PaginaUsuarioLista() {
  return (
    <div className="container my-5">
      <div className="card shadow-sm border-0">
        <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
          <h4 className="mb-0 text-primary">Usuários Cadastrados</h4>
          <a href="usuarios-cadastro.html" className="btn btn-success">
            <i className="bi bi-plus-circle me-2" />
            Novo Usuário
          </a>
        </div>
        <div className="card-body p-0">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th className="ps-4">ID</th>
                <th>Nome</th>
                <th>Matrícula</th>
                <th>Email</th>
                <th className="text-center">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="ps-4">1</td>
                <td>João Silva</td>
                <td>
                  <code>111111</code>
                </td>
                <td>joao@gmail.com</td>
                <td className="text-center">
                  <div className="btn-group">
                    <a
                      href="usuarios-cadastro.html"
                      className="btn btn-sm btn-outline-warning"
                      title="Editar Usuário"
                    >
                      <i className="bi bi-pencil" /> Editar
                    </a>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      title="Excluir"
                    >
                      <i className="bi bi-trash" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PaginaUsuarioLista;
