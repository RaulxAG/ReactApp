import Cabecera from "../components/Cabecera";
import Busqueda from "../components/Busqueda";
import TarjetasGrid from "../components/TarjetasGrid";
import Detalle from "./Detalle";
// import Principal2 from "./Principal2"
import Filtro from "./Filtro"

import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  // Link
} from "react-router-dom";

export default function Principal() {
  return (
    <>
      <Router>
        <Cabecera />
        <Busqueda />
        <Routes>
          <Route exact path="/ReactApp/" element={<TarjetasGrid />} />
          <Route exact path="/ReactApp/Detalle/:id" element={<Detalle />} />
          <Route path="/ReactApp/filtro/:search?" element={<Filtro />} />
        </Routes>
      </Router>
    </>
  );
}
