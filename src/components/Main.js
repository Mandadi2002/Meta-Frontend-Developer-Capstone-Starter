/* eslint-disable no-undef */
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header';
import Booking from './Booking';

const Main = () => {

    const seedRandom = function(seed){
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function(){
            return (s = (s * a) % m) / m;
        }
    }
    //const {state, dispatch} = useReducer(updateTimes, initialState);  // Assuming useReducer is imported
    //  The following is a placeholder since useReducer is not fully defined in the provided code.


     const fetchAPI = function(date){
        let result = [];
        let random = seedRandom(date.getDate());
        for (let i = 17; i<= 23; i++){
            if(random() < 0.5){
                result.push(i + ':00')
        }
        if(random() > 0.5){
            result.push(i + ':30')
        }
        }
        return result;
     }

    const submitAPI = function(formData){
        return true;
    }

    const state = [];
    const dispatch = () => {};
    const SubmitForm = () => {}; // Placeholder for SubmitForm
    
    function updateTimes(state, date) {
        return {avaliableTimes:fetchAPI(new Date())}
    }

    const navigate = useNavigate();
    function submitForm (formDate) {
        if(submitAPI(formData)){
            navigate('/confirmed');
        }
        
    }

    return (
        <main>
            <Routes>
               <Route path='/' element={<Header/>}/>
               <Route path='/booking' element={<Booking avaliableTimes={state} dispatch={dispatch} SubmitForm={SubmitForm} />} />
            </Routes>
        </main>
    );
};

export default Main;