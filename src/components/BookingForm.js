import React from "react";
import { useState } from "react";

const BookingForm = () => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuest] = useState("");
    const [occasion,setOccasion] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date</label>
                            <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required/>
                        </div>
                        <div>
                            <label htmlFor='book-time'>Choose Time</label>
                            <select id='book-time' value={times} onChange={(e) => setTimes(e.target.value)} required>
                                <option value="">Select a Time</option>
                                {
                                    props.avaliableTimes.avaliableTimes.map(avaliableTimes => {return <option value={avaliableTimes}>{avaliableTimes}</option>})
                                }
                            </select>
                        </div>

                        <div>
                            <label htmlFor="book-guests">Number of Guests</label>
                            <input id='book-guests' value={guests} onChange={(e) => setGuest(e.target.value)} type='number' min='1' max='10' required/>'
                        </div>
                        
                        <div>
                            <label htmlFor='book-occasion'>Occasion:</label>
                            <select id='book-occasion' key={occasion} onChange={(e) => setOccasion(e.target.value)} required></select>
                        </div>

                    </fieldset>
                </form>
            </section>
        </header>
    );
};
export default BookingForm;