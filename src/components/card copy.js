import React, { useState } from "react";

const Card2 = ({texto, borrar, funcion}) => {

    const [tituloVisible, setTituloVisible] = useState(true)



const borrarTitulo = () =>{
    setTituloVisible(false)
}



    return(
        <>
        {tarjetaVisible &&
        <div>
            <h3>{texto}</h3>
            {tituloVisible && <h5>Subtitulo</h5>}
            <button onClick={borrarTitulo}>BORRAR SUBTITULO</button>
            <button onClick={borrarTarjeta}>BORRAR TARJETA</button>
            <button onClick={funcion}>FUNCION</button>
        </div>}
        </>
    )
}

export default Card2