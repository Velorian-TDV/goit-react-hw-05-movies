import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom";
import themoviedbParser from "../../services/MovieParser";

export default function HomePage() {

    const [films, setFilms] = useState([]);
    const location = useLocation();

    useEffect(() => {
        themoviedbParser('trending/movie/day?')
            .then(data => {
                setFilms(data.results)
            })
    }, [])

    return (
        <section className="homepage">{
            films === null ? <p>Whoops something go wrong</p> :
                films.map(film => {
                    return (
                        <NavLink key={film.id} to={`movies/${film.id}?`} className='item' state={{ from: location }}>
                            <img className="item_image" src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt={film.title} />
                            <p className='item_title'>{film.title}</p>
                        </NavLink>
                    )
                })
        }</section>
    )
}