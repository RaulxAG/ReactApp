import { monsters } from "../monsters.json";
import { useParams, Link } from "react-router-dom";
import style from "../components/TarjetasGrid.module.css"
import Tarjeta from "../components/Tarjeta";

export default function Filtro() {
    const { search } = useParams();
  
    // Filtrar monstruos por nombre
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    );
    
    return (
        <section className={style.seccionConFondo}>
            <div className={style.fondoConBlur}></div>
            <div>
                <h2 style={{color: 'white', backgroundColor: '#4e6e52', width: 'fit-content', padding: '5px 10px', borderRadius: '10px', boxShadow: 'inset 0 0 5px black'}}>Resultado de la búsqueda: <span>{search}</span></h2>
                <Link className="link"  to="/" style={{padding: '5px 30px', backgroundColor: '#4e6e52', color: 'white', textDecoration: 'none', borderRadius: '0 10px 10px 0', boxShadow: 'inset 0 0 5px black'}}>
                    Volver
                </Link>
                <ul className={style.lista}>
                    {filteredMonsters.map((monster) => (
                        <Tarjeta key={monster._id["$oid"]} monster={monster} />
                    ))}
                </ul>
            </div>
        </section>
    );
  }
  