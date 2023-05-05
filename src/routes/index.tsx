import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";

function RoutecCentral() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
        </Routes>
    )
}

export default RoutecCentral