import Tarjeta from "./Tarjeta";
import { monsters } from "../monsters.json";
import style from "./TarjetasGrid.module.css"

export default function TarjetasGrid2() {
    return (
        
        <section className={style.seccionConFondo}>
            <h1>filtrado</h1>
            <div className={style.fondoConBlur}></div>
            <ul className={style.lista}>
                {monsters.map((monster) => (
                    // eslint-disable-next-line react/jsx-key
                    <Tarjeta monster={monster} />
                ))}
            </ul>
        </section>
    );
}