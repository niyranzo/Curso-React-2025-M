const VITE_API_TOKEN = import.meta.env.VITE_API_TOKEN;
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
const VITE_BASE_IMAGE_URL = import.meta.env.VITE_BASE_IMAGE_URL;

// Objeto para definir tamaños de imágenes
export const IMAGES_SIZES = {
    POSTER: "w500",
    BACKDROP: "original",
};

// Función para obtener la URL de una imagen
export const getImageUrl = (path, size = IMAGES_SIZES.POSTER) => {
    if (!path) return "/placeholder-movie.jpg";
    return `${VITE_BASE_IMAGE_URL}/${size}${path}`;
};

// Función genérica para hacer peticiones a la API
const fetchFromApi = async (endpoint, options = {}) => {
    try {
        const response = await fetch(
            `${VITE_BASE_URL}/${endpoint}?api_key=${VITE_API_TOKEN}&language=es-ES&${new URLSearchParams(options)}`
        );

        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.status} - ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error en la petición:", error);
        throw error;
    }
};

// Obtener películas populares
export const getPopularMovies = async (page = 1) => {
    return fetchFromApi("movie/popular", { page });
};

// Obtener detalles de una película
export const getMovieDetails = async (id) => {
    return fetchFromApi(`movie/${id}`);
};

// Buscar películas por nombre
export const searchMovies = async (query, page = 1) => {
    return fetchFromApi(`search/movie`, { query, page });
};

// Obtener videos/trailers de una película
export const getMovieVideos = async (id) => {
    return fetchFromApi(`movie/${id}/videos`);
};
