import style from "./Busqueda.module.css";
import { useNavigate } from "react-router-dom";

export default function Busqueda() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    var searchText = document.getElementById("search").value;
    navigate(`/ReactApp/filtro/${searchText}`);
  };

  return (
    <>
      <form
        className={style.SearchFormulario}
        action="#"
        method="post"
        onSubmit={handleSubmit}
      >
        <input className={style.search} type="search" name="search" id="search" required />
        <input className={style.searchButton} type="submit" value="Buscar" />
      </form>
    </>
  );
}
  
// function mostrar() {
//   alert(document.getElementById('input').value);
  
// }