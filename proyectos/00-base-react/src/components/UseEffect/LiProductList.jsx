import React from 'react'

const LiProductList = (props) => {
    const [product, key] = props
  return (
      <li className="bg-gray-100 shadow-lg rounded-lg p-6 flex flex-cl justify-between mb-10" key={product.id}>
        <span>{product.name}</span>
        <span>{product.price}</span>
        <button>Eliminar</button>
         </li>
  )
}

export default LiProductList