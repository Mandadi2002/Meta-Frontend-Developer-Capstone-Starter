import React from "react";
import BookingForm from "./BookingForm";

const Booking = (props) => {
    return (
         <BookingForm avaliableTimes={props.avaliableTimes} dispatch={props.dispatch} SubmitForm={props.submitForm}/> 
    );
};