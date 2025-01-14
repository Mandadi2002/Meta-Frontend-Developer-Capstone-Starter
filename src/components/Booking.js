import React from "react";
import BookingForm from "./BookingForm";

const Booking = (props) => {
    return (
        <div>
         <BookingForm avaliableTimes={props.avaliableTimes} SubmitForm={props.SubmitForm} /> 
        </div>
    );
};