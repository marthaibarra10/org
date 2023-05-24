import { useState } from "react"
import "./Formulario.css"
import Campo from "../../Campo"
//Vamos a crear un componene por medio de una función
import ListaOpciones from "../../ListaOpciones"
import Boton from "../../Boton"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    //useState para el formulario para crear equipos
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    //Destructuración de registrar colaborador solo para eliminar el props dentro de la función manejarEnvio
    const { registrarColaborador, crearNuevoEquipo } = props

    //Buscamos prevenir el comportamiento por defecto del botón que es enviar la info a una URL
    const manejarEnvio = (evento) => {
    evento.preventDefault();
    console.log("Manejar envío")
    let datosAEnviar = {
        nombre : nombre,
        puesto : puesto,
        foto : foto,
        equipo : equipo
    }
    registrarColaborador(datosAEnviar)
}

    //Buscamos prevenir el comportamiento por defecto del botón que es enviar la info a una URL
    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        //Enviamos al componente app el titulo y color como un objeto por eso tiene llaves
        //Y es lo mismo que crearNuevoEquipo({ titulo:titulo, color:color })
        crearNuevoEquipo({ titulo, colorPrimario: color })
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio} >
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo titulo="Nombre" placeholder="Ingresar nombre" required valor={nombre} actualizarValor={actualizarNombre} />
            <Campo titulo="Puesto" placeholder="Ingresar puesto" required valor={puesto} actualizarValor={actualizarPuesto} />
            <Campo titulo="Foto" placeholder="Ingresar enlace de foto" required valor={foto} actualizarValor={actualizarFoto}/>
            <ListaOpciones valor={equipo} actualizarValor={actualizarEquipo} equipos={props.equipos}/>
            <Boton>
                Crear
            </Boton>
        </form>

        
        <form onSubmit={manejarNuevoEquipo} >
            <h2>Rellena el formulario para crear el equipo</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresar titulo" 
                required valor={titulo} 
                actualizarValor={actualizarTitulo}
            />

            <Campo 
                titulo="Color" 
                placeholder="Ingresar el color en Hex" 
                required valor={color} 
                actualizarValor={actualizarColor} 
                type="color"
            />

            <Boton>Registrar Equipo</Boton>
        </form>

    </section>
}

//Exportamos por defecto el formulario para que esté disponible
export default Formulario