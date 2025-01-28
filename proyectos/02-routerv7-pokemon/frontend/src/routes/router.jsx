// importaciones
import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./paths";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";
import FavoritesPage from "../pages/FavoritesPage";
import AboutPage from "../pages/AboutPage";
import PokemonDetailPage from "../pages/PokemonDetailPage";


export const router = createBrowserRouter([
    { //cada uno es una ruta
        element:<RootLayout />,
        errorElement:<ErrorPage />,
        children: [ //estas rutas son hijas de los corchetes azules, se separan para poder renderizar
            {
                path: ROUTES.HOME, // === "/"
                element: <Home />
            },
            {
                path: ROUTES.SEARCH, // === "/search"
                element: <SearchPage />
            },
            {
                path: ROUTES.FAVORITES, // === "/favourites"
                element: <FavoritesPage />
            },
            {
                path: ROUTES.POKEMON_DETAILS, // === "/search"
                element: <PokemonDetailPage />,
                errorElement:<ErrorPage />,
                //loader: permite hacer un fect directamente en la ruta
                loader: async ({ params }) => {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
                    if(!response.ok){
                        throw new Error("Pokemon not found");
                    }
                    return await response.json();
                } 
            },
            {
                path: ROUTES.ABOUT, // === "/search"
                element: <AboutPage />
            },
        ]
    },
]);