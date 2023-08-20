// ****************************************************************************************************************
// 
// Запросы
// 
// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
// 
// ***************************************************************************************************************
// 
// Структура
// 
// '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
// '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
// '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
// /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
// /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.
// 
// ***************************************************************************************************************
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Wrapper } from "./App.styled";

const HomePage = lazy(() => import("./HomePage/HomePage"));
const NotFound = lazy(() => import("./NotFound/NotFound"));
const Navbar = lazy(() => import("./Navbar/Navbar"));
const Movie = lazy(() => import('./Movie/Movie'));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const Movies = lazy(() => import("./Movies/Movies"));

export default function App() {
    return (
        <Wrapper>
            <Navbar />
            <Suspense fallback={<div>Loading ...</div>}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/movies/:movieId" element={<Movie />}>
                        <Route path="cast" element={<Cast />} />
                        <Route path="reviews" element={<Reviews />} />
                    </Route>
                </Routes>
            </Suspense>
        </Wrapper>
    )
}