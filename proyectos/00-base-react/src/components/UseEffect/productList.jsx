// lista de productos renderizados
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard.jsx'
import LiProductList from './LiProductList.jsx'

const ProductList = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const fetchProducts = async () => {
        try {
            const response = await fetch("http://localhost:5173/src/data/db1.json");
            if(!response.ok){
                throw new Error("No se pudo");
            }
            setProducts(await response.json());
        } catch (error) {   
            console.error(error);
        }
    }
    useEffect(() => {
        // aqui realizamos la suma del carrito 
        // y lo guardamos en unestado llamado totalCart
        // que se muestra en el componente
    } [cart])
    const addCart = (product) => {
        setCart((prevCard)=>[...prevCard, product]) // ??
    }
    const deleteProductCart = (productId) => {
        // hacer el borrado de un producto 
    }
    const 
    useEffect(() => {   
        fetchProducts();
    }, []) //para que se pinte una sola vez
    
  return (
    <div className='w-full max-w-5xl mx-auto p-a'>
        <h1>Lista Productos</h1>
        {/* div para los productCard */}
        <div className=''>
            { products.map((product) => {
                // llamo al componente productCard
                return <ProductCard key={product.id} product={product} addCart={addCart} />
            }) }
        </div>
        {/* div para el ul del carrito */}
        <div className='mt-10'>
            <h2 className='text-2xl font-bold text-center'>Carrito de compras</h2> 
            <p className='text-xl font-semibold text-center mb-6 '>Total Carrito: </p>
            {cart.length === 0 ? (
            <p className='text-xl font-semibold text-center mb-6 '>Carrito vacio</p>
        ) : (
            <ul>
                {cart.map((product) => {
                    <LiProductList product={product} />
                })}
            </ul>
        )}
        </div>
    </div>
  )
}

export default ProductList