// lista de productos renderizados
import React, { useState } from 'react'

const productList = () => {
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
        fetchProducts();
    }, [])
    
  return (
    <div>productList</div>
  )
}

export default productList