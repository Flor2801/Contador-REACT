import React, { useState } from 'react'


const Contador3 = ({valor}) => {
  const [valorCantidad, setValorCantidad] = useState(valor);
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

export default Contador3