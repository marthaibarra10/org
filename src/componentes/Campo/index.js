import { useState } from "react"
import "./Campo.css"

//props es un objeto con todas las propiedades que decidamos enviarle
//En la fila 9 donde tenemos el input podríamos poner required para que todos los campos sean
//Requeridos obligatoriamente, pero si alguno de ellos no es obligatorio sería un problema
//Por eso los campos requeridos se van a manejar por las props es decir required={props.required}
const Campo = (props) => {

    const placeholderModificado = `${props.placeholder}...`

    //Desestructuración
    const { type } = props

    console.log(props.type)

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className= {` campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type={ type }
            >
        </input>
    </div>
} 

export default Campo