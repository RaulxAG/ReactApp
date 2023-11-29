import { useParams } from 'react-router-dom';
import { monsters } from "../monsters.json";
import "./Detalle.module.css";
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    // Routes,
    Link
  } from "react-router-dom";

export default function Detalle() {
  const { id } = useParams();

  // Buscar el monstruo por el id
  const monstruoSeleccionado = monsters.find(monstruo => monstruo._id.$oid === id);

  // Si no se encuentra el monstruo, puedes mostrar un mensaje de error o hacer algo más
  if (!monstruoSeleccionado) {
    return <div>No se encontró el monstruo con ID {id}</div>;
  }

  // Resto de tu lógica aquí
  return (
    <div style={{height: '83.4vh', backgroundColor: '#86785a', boxShadow: 'inset 0 10px 30px #5f5d54'}}>
        <Link className="link"  to="/" style={{padding: '5px 30px', backgroundColor: '#4e6e52', color: 'white', textDecoration: 'none', borderRadius: '0 10px 10px 0'}}>
            Volver
        </Link>

      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', padding: '0 25px', textAlign: 'center'}}>
        <div>
          <h4>ID del monstruo: {id}</h4>
          <h2>{monstruoSeleccionado.name}</h2>
          
          <img src={"/icons/"+monstruoSeleccionado.games[0].image} alt="" style={{ width: '400px' }}/>
          <p>Type: {monstruoSeleccionado.type}</p>
          <p>Is Large: {monstruoSeleccionado.isLarge ? 'Yes' : 'No'}</p>
          <p>Elements: {monstruoSeleccionado.elements}</p>
          <p>Ailments: {monstruoSeleccionado.ailments}</p>
          <p>Weakness: {monstruoSeleccionado.weakness}</p>
          {/* <div>
            <h3>Games:</h3>
            {monstruoSeleccionado.games.map((game, index) => (
              <div key={index}>
                <h4>{game.game}</h4>
                <p>Info: {game.info}</p>
                <p>Danger: {game.danger}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}