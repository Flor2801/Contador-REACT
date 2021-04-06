import React, { useState } from 'react';




const Muestraestado = () => {

    const [personaje, setNombre] = useState("Clark Kent")
    const [profesion, setProfesion] = useState("Periodista")
    const [señas, setSeñas] = useState("Anteojos")


    const handleClick = () => {
        setNombre("Superman")
        setProfesion("Superhéroe")
        setSeñas("Capa")
    }


    return (
        <div>
        <h3>NOMBRE:</h3>
        <p>{personaje}</p>
        <h3>PROFESIÓN:</h3>
        <p>{profesion}</p>
        <h3>SEÑAS PARTICULARES:</h3>
        <p>{señas}</p>

        <button onClick={handleClick}>EMERGENCIA!</button>


        </div>

        

    )
}

export default Muestraestado