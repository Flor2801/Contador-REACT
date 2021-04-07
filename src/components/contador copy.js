import React, { useState } from 'react'


const Contador2 = ({borrar}) => {
    const [valorCantidad, setValorCantidad] = useState(0);
  
    let cantidadDeClics = valorCantidad;

    const handleClickMas = () => {
      setValorCantidad(valorCantidad + 1);
    };
  
    const handleClickMenos = () => {
      setValorCantidad(valorCantidad - 1);
    };
    
        return (

  <div className="counter">
    <button onClick={handleClickMenos}>-</button>
    <span> {cantidadDeClics} </span>
    <button onClick={handleClickMas}>+</button>
  </div>

        )

}

export default Contador2