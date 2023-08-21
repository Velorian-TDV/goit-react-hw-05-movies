import { Route, Routes, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Wrapper } from "./App.styled";

const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const Navbar = lazy(() => import("./Navbar/Navbar"));
const Movie = lazy(() => import('./Pages/Movie/Movie'));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const Movies = lazy(() => import("./Pages/Movies/Movies"));

export default function App() {
    return (
        <Wrapper>
            <Navbar />
            <Suspense fallback={<div>Loading ...</div>}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* <Route path="*" element={<Navigate to='/' />} /> */}
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