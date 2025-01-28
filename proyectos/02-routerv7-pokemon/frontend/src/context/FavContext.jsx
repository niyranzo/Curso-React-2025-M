import { createContext, useEffect, useState } from "react";


export const FavContext = createContext();

export const FavProvider = ({children}) => {
    const [favs, setFav] = useState(() => {
        const savedFav = localStorage.getItem('fav');
        return savedFav ? JSON.parse(savedFav) : [];
    });

    useEffect(() => {
        localStorage.setItem('fav', JSON.stringify(favs))
    }, [favs]); 
 
    const addFav = (pokemon) => {
        setFav((prevFav) => [...prevFav, pokemon])
    }
    return (
        <FavContext.Provider value={ {favs, addFav} }>
            {children}
        </FavContext.Provider>
    );
}