import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { PropTypes } from 'prop-types'

export default function MovieCard(films) {
    const location = useLocation();

    return (
        films.films.map(film =>
            <NavLink key={film.id} to={`/movies/${film.id}?`} className='item' state={{ from: location }}>
                <img
                    className="item_image"
                    src={film.poster_path === null ?
                        `https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923`
                        :
                        `https://image.tmdb.org/t/p/w200/${film.poster_path}`
                    }
                    alt={film.title} />
                <p className='item_title'>{film.title}</p>
            </NavLink>
        )
    )
}

MovieCard.propTypes = {
    film: PropTypes.object,
}