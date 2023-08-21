import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import themoviedbParser from "../../services/MovieParser"

export default function Reviews() {
    const [reviews, setReviews] = useState([])
    const { movieId } = useParams();

    useEffect(() => {
        themoviedbParser(`movie/${movieId}/reviews?`)
            .then(data => setReviews(data.results))
    }, [])

    return (
        <section className="reviews">{
            reviews.length === 0 ? <p className="err">No reviews</p> :
                reviews.map(revie => {
                    return (
                        <div className="revie_block" key={revie.id}>
                            <p className="revie_name">{revie.author}</p>
                            <p className="revie_content">{revie.content}</p>
                        </div>
                    )
                })
        }</section>
    )
} 