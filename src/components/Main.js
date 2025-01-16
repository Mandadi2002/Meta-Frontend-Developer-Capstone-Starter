import React from "react";
import { Route, Routes } from "react-router-dom";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Header/>}/>
            </Routes>

            </main>
    );
};
export default Main;