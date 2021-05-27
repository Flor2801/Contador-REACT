import React, { useState } from "react";

const Card = ({texto, borrar, funcion}) => {

    const [tituloVisible, setTituloVisible] = useState(true)
  

const borrarTitulo = () =>{
    setTituloVisible(false)
}



    return(
        <div>
            <h3>{texto}</h3>
            {tituloVisible && <h5>Subtitulo</h5>}
            <button onClick={borrarTitulo}>BORRAR SUBTITULO</button>
            <button onClick={borrar}>BORRAR TARJETA</button>
            <button onClick={funcion}>FUNCION</button>
        </div>
    )
}

export default Card