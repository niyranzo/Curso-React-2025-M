import { useState } from 'react'
import guitarSolid from "../../assets/guitar-solid.svg"

const CardGuitar = ({ guitar }) => {
    const { name, price, type } = guitar;
    return (
        <div 
        key={name} 
        className='bg-gray-100 p-4 mt-4 rounded-lg shadow-md flex items-center'
    > 
        <img 
            src={guitarSolid} 
            alt={name} 
            width="40px" 
            className='w-20 h-20 object-cover rounded-md ml-4 mr-10'
        />
        <div>
            <h2 className='text-lg font-bold'>{name}</h2>
            <h2 className='text-sm font-gray-700'>{type}</h2>
            <h2 className='text-xl font-bold text-pink-700'>{price}€</h2>
        </div>
    </div>
    )
}

export default CardGuitar