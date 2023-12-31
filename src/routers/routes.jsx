import {  Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Error from "../Pages/Error";

const AppRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:pokemonId" element={<Profile />} />
            <Route path="*" element={<Error />} />

        </Routes>

    );
};
export default AppRoutes;