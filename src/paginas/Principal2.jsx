// import Cabecera from "../components/Cabecera";
// import Busqueda from "../components/Busqueda";
import TarjetasGrid from "../components/TarjetasGrid";
import Detalle from "./Detalle";

import {
  // BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  // Link
} from "react-router-dom";

export default function Principal2() {
  return (
    <>
      <h1>Filtrado</h1>
      {/* <Cabecera />
      <Busqueda /> */}
        <Routes>
          <Route exact path="/" element={<TarjetasGrid />} />
          <Route exact path="/Detalle/:id" element={<Detalle />} />
          <Route path="/filtro/:search?" element={<Principal2 />} />
        </Routes>
    </>
  );
}
