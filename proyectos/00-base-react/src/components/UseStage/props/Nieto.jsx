import React from 'react'

const Nieto = (props) => {
    const {counter, handleClick} = props;
   
  return (
    <>
        <div>Hola yo soy tu Nieto</div>
        <p>El contador vale {counter}</p>
        <button onClick={handleClick} className='bg-slate-600 text-white px-2 py-5 mb-5 mt-6 hover-bg-slate-900'>Aumento el contador desde el nieto</button>
    </>
    ) 
}

export default Nieto