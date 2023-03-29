/* import React from 'react'; */
import foto from '../imagenes/testimonio-emma.png'
import '../styles/testimonio.css'
//creo el componente
function Testimonio(props) {
    return (
        <div className='contenedor-testimonio'>
           {/* <img src={require('../imagenes/testimonio-emma.png')}></img> */}
           <img src={props.imagen} className='imagen-testimonio' alt="" />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
                <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong> </p>
                <p className='texto-testimonio'>"{props.testimonio}"</p>
            </div>
        </div>
    )
}

export default Testimonio;