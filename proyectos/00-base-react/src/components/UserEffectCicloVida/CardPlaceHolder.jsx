import React, { useEffect, useState } from 'react'

const CardPlaceHolder = () => {
    const [users, setUsers] = useState([])
    // la funcion hace todo, hasta setear los datos
    const fetchDataPlaceHolder = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if(!response.ok){
                throw new Error("No se pudo traer la data");
            }
            setUsers(await response.json());
        } catch (error) {
            throw new Error("Error en la petición", error);
        }
    }
    useEffect(() => {
        fetchDataPlaceHolder();
    }, []);
  return (
    <div className='bg-gray-200 shadow-lg p-6 flex-col justify-center items-center'>
        {users.map(user => (
        <div key={user.id} className='flex justify-center items-center'>
            <h2 className='text-xl font-bold mb-4'>
                Username : {user.username}
            </h2>
            <p className= 'text-gray-600 mb-4'>City : {user.address.city}</p>
        </div>
        ))}
    </div>
  )
}

export default CardPlaceHolder