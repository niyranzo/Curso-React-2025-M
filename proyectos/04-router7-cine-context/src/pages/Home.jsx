import { getPopularMovies } from "../services/tmdb";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
//estado para el numero de pagina
    const [page, setPage] = useState(1);
    //me traigo la data de las peliculas
    const { data, loading, error } = useFetch(()=>getPopularMovies(page), [page]);
    //que pasa con el scroll



    //si esta cargando???
    if(error){
        return (
            <div className="text-center p-10">
                <h2 className="text-red-600 font-bold text-2xl">Error al traer las peliculas</h2>
                <p className="text-xl font-medium">{error.message}</p>
                <Link to="/" className="text-blue-600">Volver al inicio</Link>
            </div>
        )
    }
    return (
      <div className="space-y-8">
          <header className="text-center">
              <h1 className="text-4xl font-bold text-sky-950">Bienvenido al VideoClub</h1>
              <p className="text-lg font-medium text-sky-900 mt-2">Descubre las peliculas más populares del momento</p>
          </header>
          {/**Seccion de peliculas populares */}
          <section>
              <h2 className="text-2xl font-bold text-sky-950">Peliculas Populares</h2>
              {loading ? (<div>Cargando Películas...</div>) : (
                <>
                {/* grid de las peliculas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                {data?.results?.map((movie) =>(
                  // aqui va el componente MovieCard
                  <MovieCard key={movie.id} movie={movie}/>
                ))}
                </div>
                </>
              )}

          </section>
      </div>
    )

}

export default Home