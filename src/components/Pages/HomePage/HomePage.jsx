import { useEffect, useState } from "react"
import MovieCard from "../../MovieCard/MovieCard";
import themoviedbParser from "../../../services/MovieParser";

export default function HomePage() {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        themoviedbParser('trending/movie/day?')
            .then(data => {
                if (data === null) return setFilms(null)
                setFilms(data.results)
            })
    }, [])

    return (
        <section className="homepage">
            {films === null ?
                <p>Woops something go wrong</p>
                :
                <MovieCard films={films} />
            }
        </section>
    )
}