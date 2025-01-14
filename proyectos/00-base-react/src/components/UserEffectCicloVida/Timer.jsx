import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);

    // useEffect(() => {
    //     // nunca utilizar funciones asincronas dentro de usereffec
    //     console.log("Componente montado")
    //     // si no le paso array de dependencia , se ejecuta cada vez que se renderiza 
    // });
    // ------------------
    // useEffect(() => {
    //     console.log("Componente montado solo una vez");
    // }, []);
    // ---------------
    useEffect(() => {
        console.log("Componente renderizado cada vez que se modifica lago del array de dependencias");
    }, [counter]);
  return (
    <>
        <div>Timer</div>
        <p>{counter}</p>
        <p>{counter2}</p>
        <button onClick={()=>setCounter(prevCounter => prevCounter+1)}>Iniciar</button>
        <button onClick={()=>setCounter2(prevCounter => prevCounter+1)}>Iniciar2</button>

    </>
  )
}

export default Timer