import React, { useState } from "react";
import "./index.css";
import "./App.css";
import Muestraestado from "./components/muestraEstado";
import Contador from "components/contador";
import Contador2 from "components/contador copy";
import Contador3 from "components/contador copy 2";
import Card from "components/card";
import Card2 from "components/card copy";

const App = () => {
  const [textoNombre, setNombre] = useState("usuario");
  const [valorDelInput, setInput] = useState("");
  const [valorCantidad, setValorCantidad] = useState(0);


  const handleClickSaludo = () => {
    console.log("hola");
    setNombre(valorDelInput);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const reiniciar = () => {
    setValorCantidad(0);
  };

  const funciondeejemplo = () => {
    console.log("test ejemplo")
}

const [tarjetasVisibles, setTarjetasVisibles] = useState(true)


const borrarTarjeta = () => {
    setTarjetasVisibles(false)
}


  return (
    <div className="contenedor">
      <p>CONTADOR - Practica de estado</p>

      <Contador borrar={reiniciar} valor={valorCantidad}/>
      <Contador2 borrar={reiniciar}/>
      <Contador3 borrar={reiniciar}/>

      <button onClick={reiniciar}>BORRAR TODO</button>

      <div>
        <div className="contenedor-saludador">
          <p>SALUDADOR DE USUARIOS</p>
          <input
            type="text"
            placeholder="Escribi tu nombre"
            onChange={handleChange}
          ></input>
          <button onClick={handleClickSaludo}>Saludar</button>
          <h3>Hola {textoNombre}</h3>
        </div>
      </div>

      <Muestraestado/>


{
tarjetasVisibles && 
<div className="tarjetas">

    <Card texto="Hola soy tarjeta 1" funcion={funciondeejemplo} borrar={borrarTarjeta}/>
    <Card2 texto="Hola soy tarjeta 2" funcion={funciondeejemplo} borrar={borrarTarjeta}/>
    <Card texto="Hola soy tarjeta 3" funcion={funciondeejemplo}/>
    <Card texto="Hola soy tarjeta 4" funcion={funciondeejemplo}/>


</div>
}



    </div>
  );
};
export default App;
