import { useState } from "react";
import { useEffect } from "react";

// hook que se ecargue de ralizar cualquier peticion a la api
export const useFetch = (fetchFunction, dependencies=[]) => {
    // estado para guardar la data
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchData = async () => {
        try {
            const result = await fetchFunction();
            setData(result);
        } catch (error) {
            setError("Error en el fetch", error);
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        // creo un obj para abortar la peticion
        const abortController = new AbortController();
        // funcion que hace la peticion a la api
        setLoading(true);
        fetchData();
        return () => {
            // cuando desmonto el componente aborto la peticion
            abortController.abort();
        }
    }, dependencies)

    return {data, loading, error};

}