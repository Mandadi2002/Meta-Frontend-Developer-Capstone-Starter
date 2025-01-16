import React, { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Booking from "./Booking";

const Main = () => {
    const initialState = {availableTimes: fetchAPI(new Date())};
    const [state,dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Header/>}/>
                <Route path='/booking' element={<Booking availableTimes={state} dispatch={dispatch} SubmitForm={SubmitForm}/>}/>
            </Routes>

            </main>
    );
};
export default Main;