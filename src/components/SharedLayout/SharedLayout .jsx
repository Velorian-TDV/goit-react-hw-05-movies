import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import { Wrapper } from "../App.styled";

const Navbar = lazy(() => import("../Navbar/Navbar"));

export default function SharedLayout() {
    return (
        <Wrapper>
            <Navbar />
            <Outlet />
        </Wrapper>
    );
};