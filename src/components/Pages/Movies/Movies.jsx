import { useState, useEffect } from "react";
import { useSearchParams, NavLink, useLocation } from "react-router-dom";
import themoviedbParser from '../../../services/MovieParser';
import MovieCard from "../../MovieCard/MovieCard";

export default function Movies() {

    const [films, setFilms] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');
    const location = useLocation();

    useEffect(() => {
        if (query !== null) {
            themoviedbParser(`search/movie?query=${query}&`)
                .then(data => {
                    setFilms(data.results)
                })
        }
    }, [])

    const handleChange = event => setSearchParams({ query: event.target.value })

    const handleSubmit = event => {
        event.preventDefault()

        themoviedbParser(`search/movie?query=${query}&`)
            .then(data => {
                if (data.results.length === 0) return setFilms(null)
                setFilms(data.results)
            })
    }

    return (
        <section className="homepage">
            <form className="search_form" onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={query ?? ''} />
                <button type="submit">Search</button>
            </form>

            {films === null ?
                <p>Nothing was found according to your request</p>
                :
                <MovieCard films={films} />
            }
        </section>
    )
}