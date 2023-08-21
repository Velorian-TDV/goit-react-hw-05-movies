import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import themoviedbParser from "../../services/MovieParser"

export default function Cast() {
    const [actors, setActros] = useState([])
    const { movieId } = useParams();

    useEffect(() => {
        themoviedbParser(`movie/${movieId}/credits?`)
            .then(data => setActros(data.cast))
    }, [])

    return (
        <section className="actors">{
            actors.length === 0 ? <p className="err">Actor data not found</p> :
                actors.map(actor => {
                    return (
                        <div key={actor.cast_id} className="actor_card">
                            {actor.profile_path === null ?
                                <img className="actor_avatar" src={`https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg`} alt={actor.profile_path} />
                                :
                                <img className="actor_avatar" src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={actor.profile_path} />
                            }
                            <div>
                                <p className="actor_name" >{actor.original_name}</p>
                                <p>as</p>
                                <p>{actor.character}</p>
                            </div>
                        </div>
                    )
                })
        }</section>
    )
}