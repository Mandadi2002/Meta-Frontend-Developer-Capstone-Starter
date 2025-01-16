import React, { useReducer } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header';
import Booking from './Booking';


const Main = () => {  

    const initialState = {avaliableTimes: (new Date())};
    const [state, dispatch] = useReducer(updateTimes,initialState);

    function updateTimes(state,date){
        return {avaliableTimes:fetchAPI(new Date())}
    }

    const seedRandom = function(seed){
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function(){
            return (s = (s * a) % m) / m;
        }
    }
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

    const SubmitForm = (formData) => {
        submitForm(formData);
    };

    const navigate = useNavigate();
    function submitForm (formDate) {
        if(submitAPI(formDate)){
            navigate('/confirmed');
        }
        
    };
    return (
        <main>
            <Routes>
               <Route path='/' element={<Header/>}/>
               <Route path='/booking' element={<Booking avaliableTimes={state} dispatch={dispatch} SubmitForm={SubmitForm} />} />
               <Route path='/' element={<Header/>}/>
            </Routes>
        </main>
    );

};

export default Main;
