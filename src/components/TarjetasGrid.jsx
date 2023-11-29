import Tarjeta from "../components/Tarjeta";
import { monsters } from "../monsters.json";
import style from "./TarjetasGrid.module.css"

export default function TarjetasGrid() {
    return (
        <section className={style.seccionConFondo}>
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