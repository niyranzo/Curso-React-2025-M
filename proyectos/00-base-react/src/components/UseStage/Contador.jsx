import { useState } from "react";

const Contador = () => {
    //--------Espacio para los hooks------
    const [total, settotal] = useState(0)
    //------Espaccio para declarar funciones------
    function handlerCick(num = 1) {
        settotal(total+num)
    }


  return (
    <>
     <h1>Contador en React</h1>
    <h2>{total}</h2>
    <button onClick={()=>handlerCick(1)}>Incrementar</button>
    <button onClick={()=>handlerCick(-1)}>Decrementar</button>
    </>
   
  )
}

export default Contador