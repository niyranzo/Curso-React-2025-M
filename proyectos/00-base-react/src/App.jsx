import { useState } from "react"
import Contador from "./components/UseStage/Contador"
import ContadorDoble from "./components/UseStage/ContadorDoble"
import ContinuacionNumeros from "./components/UseStage/ContinuacionNumeros"
import GuitarHeroe from "./components/UseStage/GuitarHeroe"
import Padre from "./components/UseStage/props/Padre"
import Hijo2 from "./components/UseStage/props2/Hijo2"
import Nieto2 from "./components/UseStage/props2/Nieto2"
import Padre2 from "./components/UseStage/props2/Padre2"
import RegistrarFormulario from "./components/UseStage/RegistrarFormulario"
import Timer from "./components/UserEffectCicloVida/Timer"
import CardPlaceHolder from "./components/UserEffectCicloVida/CardPlaceHolder"
import ProductList from "./components/UseEffect/productList"

const App = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter((prevCounter) => prevCounter + 1);
};
  return (
    <>
    {/*<div className="text-3xl font-bold underline">Hola Mundo</div>
    <Contador />
    <hr className="mt-10"/>
    <ContadorDoble />
    <hr className="mt-10"/>
    <ContinuacionNumeros/>
    <hr className="mt-10"/>
    <RegistrarFormulario/>
    <hr className="mt-10"/>
    <GuitarHeroe/>
    <hr className="mt-10"/>
    <Padre />
    */}
     {/* <hr className="mt-10"/>
     <p>{counter}</p>
     <Padre2>
      <Hijo2>
        <Nieto2 handleClick={handleClick} />
      </Hijo2>
     </Padre2> */}
     {/* <hr className="mt-10"/> */}
     {/* <Timer /> */}
     {/* <CardPlaceHolder /> */}
     <ProductList /> 
    </>
  )
}

export default App