/* eslint-disable react/prop-types */
import style from "./Tarjeta.module.css";

import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  // Routes,
  Link
} from "react-router-dom";

export default function Tarjeta({ monster }) { 
  return (
    <Link className="link"  to={`/ReactApp/Detalle/${monster._id.$oid}`}>
    <li className={style.producto}>
      <h5>{monster.name}</h5>

      <img src={"../icons/"+monster.games[0].image} alt="" />
      
    </li>
    </Link>
  );
}