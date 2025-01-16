import React, { useState } from 'react';

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    const handleSubmit = (e) => {
        e.PreventDefault();
        props.SubmitForm(e);
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
    }

    const setTimes = (e) =>{
        setDate(e);
        props.dispatch(e);
    }
    return (
        <haeder>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose date</label>
                            <input id='book-date' value={date} onChange={(e) => setTimes(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor='book-time'>Choose time</label>
                            <input id='book-time' value={times} onChange={(e) => setTimes(e.target.value)} />
                            <option value="">Select a Time</option>
                            {
                                props.avaliableTimes.avaliableTimes.map(avaliableTimes => {return <option key={avaliableTimes}>{avaliableTimes}

                                </option>})
                            }
                        </div>

                        <div>
                            <label htmlFor='book-guests'>Number of guests:</label>
                            <input id='book-guests' min='1' value={guests} onChange={(e) => setGuests(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor='book-occasion'>Occasion</label>
                            <select id='book-occasion' key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                        </div>
                        <div className='btnReceive'>
                            <input aria-label='On-Click' type='submit' value={'Make your reservation'}></input>
                        </div>
                    </fieldset>
                </form>
            </section>
        </haeder>
    );
};

export default BookingForm;