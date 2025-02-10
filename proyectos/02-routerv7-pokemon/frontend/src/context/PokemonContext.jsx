import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";
const url = import.meta.env.VITE_API_URL;
const favoriteUrl = import.meta.env.VITE_FAVORITE;

const PokemonContext = createContext();

export function PokemonProvider({children}) {
    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        fetchFav();
    }, [])
    async function fetchFav(){
        try {
          const response = await fetch(`${url}${favoriteUrl}`);
          if(!response.ok){
            throw new Error("Error en el fetch");
          }
          const data = await response.json();
        //   Guardo los favoritos si hay data en la tabla favoritos
          if(data.length !== 0){
            setFavorites(data);
          }
        } catch (error) {
          console.error("Error al traer los favoritos");
        }
      }
    // añadir pokemons a favoritos
    const addToFavorites = async (pokemon)=>{
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
        setFavorites((prevFav) => [...prevFav, pokemon]);
        try {
            const response = await fetch(`${url}${favoriteUrl}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                // Envía el objeto pokemon dentro de la propiedad `pokemon`
                body: JSON.stringify({ pokemon }), 
              });
            if(!response.ok){
                throw new Error("No se pudo guardar el pokemon fav en la base de datos");
            }
        } catch (error) {
            console.error("Error en el post")
        }
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
    const removeFromFavorites = async (pokemonId) => {
        try {
            const response = await fetch(`${url}${favoriteUrl}/${pokemonId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if(!response.ok){
                throw new Error("No se pudo borrar de fav el pk de la base de datos");   
            }

        } catch (error) {
            console.error("Error en el DELETE", error);
        }
        setFavorites((prevFav) => prevFav.filter((pokemon) => pokemon?.id !== pokemonId));
        toast.info("Pokemon eliminado de favorito", {
            style: {
                background: "blue",
                color: "white",
                border: "1px solid black"
            },
            icon : "🗑️"
        })
};
    }
    return (
        <PokemonContext.Provider value={{ favorites, addToFavorites, removeFromFavorites}}> 
        {children}
        </PokemonContext.Provider>
    )
 

export const usePokemon = () => {
    const context = useContext(PokemonContext);
    if(context === undefined){
        throw new Error("usePokemon debe ser usado dentro del contexto");
    }
    return context;
}