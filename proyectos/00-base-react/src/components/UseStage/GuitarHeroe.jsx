import { useState } from 'react'
import CardGuitar from './CardGuitar';

const initialGuitar =[ 
        {
            name: "Stratocaster",
            price: 1200,
            type: "electric",
            image: ""
        },
        {
            name: "Les Paul",
            price: 1500,
            type: "electric",
            image: ""
        },
        {
            name: "Telecaster",
            price: 1100,
            type: "electric",
            image: ""
        },
        {
            name: "SG",
            price: 1400,
            type: "electric",
            image: ""
        },
        {
            name: "Explorer",
            price: 1300,
            type: "electric",
            image: ""
        },
        {
            name: "Flying V",
            price: 1250,
            type: "electric",
            image: ""
        },
        {
            name: "Jazzmaster",
            price: 1350,
            type: "electric",
            image: ""
        },
        {
            name: "Dreadnought",
            price: 800,
            type: "acoustic",
            image: ""
        },
        {
            name: "Parlor",
            price: 750,
            type: "acoustic",
            image: ""
        },
        {
            name: "Classical",
            price: 900,
            type: "classical",
            image: ""
        }
];
    
const GuitarHeroe = () => {
    const [filterGuitars, setFilterGuitars] = useState(initialGuitar);
    const [searchItem, setSearchTerm] = useState("")
    const [filterType, setFilterType] = useState("")

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);

        // xxx aqui vendria la funcion que realiza la busqueda
        findGuitar(value, filterType)
    }

    const findGuitar = (search, type) =>{
        const dataFiltered = initialGuitar.filter(guitar => guitar.name.toLowerCase().includes(search) && guitar.type.includes(type));
        return setFilterGuitars(dataFiltered);
    }


    const handlerFilterType = (e) =>{
        const value = e.target.value;
        setFilterType(value);

        //aqui tengo que filtrar por tipo de guitarra
        findGuitar(searchItem, value)
    }

  return (
    <div className='max-w-2xl mx-auto bg-white-200 mt-8 p-6 shadow-lg rounded-md'>
        {/*Titulo*/}
        <h1 className='text-2xl font-bold text-center mb-6'>Filtro de guitarras</h1>
        {/*Formulario para buscar*/}
        <div className='mb-6'>
            <label className='block text-gray-700 font-medium mb-2'>Buscar:</label>
            <input 
                type="text"
                placeholder='Buscar guitarra'
                value={searchItem}
                onChange={handleSearch}
                className='w-full p-2 border border-gray-300 rounded-md'
            />
        </div>

        {/*Select para filtrar por tipo de guitarra*/}
        <div className='mb-6'>
            <label className='block text-gray-700 font-medium mb-2'>Filtrar por tipo de guitarra: </label>
            <select value={filterType} onChange={handlerFilterType} className='w-full p-2 border border-gray-300 rounded-md'>
                <option value="">Todos</option>
                <option value="electric">Electricas</option>
                <option value="acoustic">Acusticas</option>
                <option value="classical">Clasicas</option>
            </select>
        </div>

        {/*Lista de guitarras*/}
        <div>
            {filterGuitars.map(guitar => (
                //aqui tengo que renderizar una cardGuitar
               <CardGuitar key={guitar.name} guitar={guitar} />
            ))}
        </div>
    </div>
  )
}

export default GuitarHeroe;