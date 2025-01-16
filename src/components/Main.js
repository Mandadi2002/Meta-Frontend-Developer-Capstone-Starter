import React, { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import Booking from "./Booking";

const Main = () => {

    const fetchAPI = function(date){
        
    }

    const submitAPI = function(formData) {
        return true;
    }

    const initialState = {availableTimes: fetchAPI(new Date())};
    const [state,dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date())}
    }
    const navigate = useNavigate();
    function SubmitForm (formData){
        if(submitAPI(formData)){
            navigate('/confirmed');
        }
    }
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