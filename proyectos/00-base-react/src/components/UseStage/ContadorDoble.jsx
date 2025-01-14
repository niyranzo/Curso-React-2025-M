import { useState } from "react"

const ContadorDoble = () => {
    const [friends, setFriends] = useState({Juan: 0, Pedro: 0, Maria: 0})
    const [pAmigos, setPAmigos] = useState(0)

    function handlerClick(nombre, valor) {
        setFriends((prevFriends)=>{
            promedio();
            return {...prevFriends, [nombre]: prevFriends[nombre] == 0 && valor < 0 ? 0 : prevFriends[nombre]  + valor}
        });
    }

    const promedio = () => {
        //calcular el promedio de amigos de friends
        const numAmigosArray = Object.values(friends)
        const totalAmigos =  numAmigosArray.reduce((acc, numAmigo) => {return acc + numAmigo}, 0)
        setPAmigos( numAmigosArray.length > 0 ? totalAmigos / numAmigosArray.length : 0)
    }

  return (
    <>
     <h1 className="text-2xl bg-cyan-600 text-center">Contador de Amigos</h1><br />
     <div className="text-center mt-10">
        <span className="mb-5 mx-10">
            {" "}Maria tiene <strong>{friends.Maria}</strong>Amigos</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded" onClick={()=>handlerClick("Maria",1)}>Incrementar</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded" onClick={()=>handlerClick("Maria",-1)}>Decrementar</button>
        <br /><br />
        <span className="mb-5 mx-10">
            {" "}Juan tiene <strong>{friends.Juan}</strong>Amigos</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded" onClick={()=>handlerClick("Juan",1)}>Incrementar</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded" onClick={()=>handlerClick("Juan",-1)}>Decrementar</button>
     </div>

     <div className="text-center mt-10">
        <span className="mb-5 mx-10">Promedio de amigos {pAmigos}</span>

     </div>
    
    </>
   
  )
}

export default ContadorDoble