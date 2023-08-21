import { Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import SharedLayout from "./SharedLayout/SharedLayout ";

const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const Movie = lazy(() => import('./Pages/Movie/Movie'));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const Movies = lazy(() => import("./Pages/Movies/Movies"));

export default function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="*" element={<Navigate to='/' />} />
                    <Route path="movies" element={<Movies />} />
                    <Route path="movies/:movieId" element={<Movie />}>
                        <Route path="cast" element={<Cast />} />
                        <Route path="reviews" element={<Reviews />} />
                    </Route>
                </Route>
            </Routes>
        </ Suspense>
    )
}