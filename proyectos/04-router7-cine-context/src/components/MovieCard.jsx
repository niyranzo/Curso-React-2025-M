import { Link } from "react-router-dom";
import { getImageUrl } from "../services/tmdb";

const MovieCard = ({ movie }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <Link to={`/movie/${movie.id}`}>
                <img 
                    src={getImageUrl(movie.poster_path)} 
                    alt={movie.title} 
                    className="w-full h-[400px] object-cover"
                />
            </Link>
            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{movie.title}</h3>
                <p className="text-gray-600 text-sm">⭐ {movie.vote_average.toFixed(1)}</p>
            </div>
        </div>
    );
};

export default MovieCard;
