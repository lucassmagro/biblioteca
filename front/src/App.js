import logo from './logo.svg';
import Menu from './componentes/Menu';
import PaginaCatalogo from './componentes/PaginaCatalogo';
import PaginaUsuarioLista from './componentes/PaginaUsuarioLista';
import PaginaUsuarioCadastro from './componentes/PaginaUsuarioCadastro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaObraLista from './componentes/PaginaObraLista';
import PaginaObraCadastro from './componentes/PaginaObraCadastro';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />

        <Routes>
          <Route path='/' element={<PaginaCatalogo />} />
          <Route path='/usuarios' element={<PaginaUsuarioLista />} />
          <Route path='/usuario' element={<PaginaUsuarioCadastro />} />
          <Route path='/usuario/:id' element={<PaginaUsuarioCadastro />} />
          <Route path='/obras' element={<PaginaObraLista />} />
          <Route path='/obra' element={<PaginaObraCadastro />} />
          <Route path='/obra/:id' element={<PaginaObraCadastro />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
