import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from "react";
import themoviedbParser from '../../../services/MovieParser';

export default function Movie() {
    const { movieId } = useParams();
    const [film, setFilm] = useState(null)
    const location = useLocation();
    const backlinkLocationRef = useRef(location.state?.from ?? '/movies');

    useEffect(() => {
        themoviedbParser(`movie/${movieId}?`)
            .then(data => setFilm(data))
    }, [])

    return (
        film === null ? null :
            <section className='movie'>

                <section className='movie_button_block'>
                    <NavLink to={backlinkLocationRef.current} className='movie_button'>Go back</NavLink>
                </section>

                <section className='poster_block'>
                    <img
                        className="poster"
                        src={film.poster_path === null ?
                            `https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923`
                            :
                            `https://image.tmdb.org/t/p/w200/${film.poster_path}`
                        }
                        alt={film.title}
                    />
                </section>

                <section className='movie_description'>
                    <p className='title'>{film.title}</p>
                    <p className='release_date'>Release date: {film.release_date.replace(/-/g, '.')}</p>
                    <p className='overview'>{film.overview}</p>

                    <section className='movie_button_block'>
                        <a className='movie_button' href={film.homepage} target='_blank'>Official Homepage</a>
                    </section>

                    <section className='movie_button_block sub_menu'>
                        <NavLink className='movie_button' to='cast' >Actors</NavLink>
                        <NavLink className='movie_button' to='reviews'>Reviews</NavLink>
                    </section>
                </section>
                
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </ Suspense>

            </section >
    )
}