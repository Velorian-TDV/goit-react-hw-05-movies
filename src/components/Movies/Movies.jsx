import { useState, useEffect } from "react";
import { useSearchParams, NavLink, useLocation } from "react-router-dom";
import themoviedbParser from '../../services/MovieParser';

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
                setFilms(data.results)
            })
    }

    return (
        <section className="homepage">
            <form className="search_form" onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={query ?? ''} />
                <button type="submit">Search</button>
            </form>

            {
                films === null ? <p>Whoops something go wrong</p> :
                    films.map(film => {
                        return (
                            <NavLink key={film.id} to={`${film.id}?`} className='item' state={{ from: location }}>
                                {
                                    film.poster_path === null ?
                                        <img className="item_image" src={`https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923`} alt={film.title} />
                                        :
                                        <img className="item_image" src={`https://image.tmdb.org/t/p/w200/${film.poster_path}`} alt={film.title} />
                                }
                                <p className='item_title'>{film.title}</p>
                            </NavLink>
                        )
                    })
            }
        </section>
    )
}