import logo from "./logo.svg";
import "./App.css";
import Menu from "./componentes/Menu";
import PaginaCatalogo from "./componentes/PaginaCatalogo";
import PaginaUsuarioLista from "./componentes/PaginaUsuarioLista";
import PaginaUsuarioCadastro from "./componentes/PaginaUsuarioCadastro";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<PaginaCatalogo />} />
          <Route path="/usuarios" element={<PaginaUsuarioLista />} />
          <Route path="/usuario" element={<PaginaUsuarioCadastro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
