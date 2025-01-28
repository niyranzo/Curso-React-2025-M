import { createContext, useContext, useState } from "react";
import { toast } from "sonner";

const PokemonContext = createContext();

export function PokemonProvider({children}) {
    const [favorites, setFavorites] = useState([]);
    // añadir pokemons a favoritos
    const addToFavorites = (pokemon)=>{
        //comprobar si el pokemon ya está en favoritos
        if(favorites.some(p=>pokemon.id===p.id)){
            //pokemon repe --> error
            toast.error(`El pokemon ${pokemon.name} ya esta en favoritos`, {
                style : {
                    background: 'red',
                    color: 'white', 
                    border: '1px solid black',
                },
                icon:'⭐',
            });
            return;
        }
        setFavorites((prevFav) => [...prevFav, pokemon])
        toast.success(`El pokemon ${pokemon.name} se añadió a favoritos`, {
            style : {
                background: 'green',
                color: 'white', 
                border: '1px solid black',
            },
            icon:'⭐',
        });
        return;
    }
    const removeFromFavorites = (pokemonId) => {
        setFavorites((prevFav) => prevFav.filter((pokemon) => pokemon?.id !== pokemonId));
        toast.info("Pokemon eliminado de favorito", {
            style: {
                background: "blue",
                color: "white",
                border: "1px solid black"
            },
            icon : "🗑️"
        })
    }
    return (
        <PokemonContext.Provider value={{ favorites, addToFavorites, removeFromFavorites}}> 
        {children}
        </PokemonContext.Provider>
    )
}

export const usePokemon = () => {
    const context = useContext(PokemonContext);
    if(context === undefined){
        throw new Error("usePokemon debe ser usado dentro del contexto");
    }
    return context;
}