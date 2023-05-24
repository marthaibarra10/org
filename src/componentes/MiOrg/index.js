import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {

    //Manejadores de estado - Hooks
    //Vamos a trabajar con useState la función useState()
    //const [nombreVariable,funcionActualiza] = useState(valorInicial)

    /* const [mostrar, actualizaMostrar] = useState(true);
    const manejarClick = () => {
        console.log("Mostrar/ocultar elemento", !mostrar)
        actualizaMostrar(!mostrar)
    } */

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg