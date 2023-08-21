import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function SharedLayout() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
    );
};