import React from 'react'
import Nieto from './Nieto2';

const Hijo2 = (props) => {
    console.log(props)    
  return (
    <>
    <div>Hola yo soy tu hijo</div>
    {props.children}
    </>
  )
}

export default Hijo2