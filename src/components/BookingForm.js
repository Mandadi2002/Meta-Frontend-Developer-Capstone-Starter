/* eslint-disable no-undef */
import React from 'react';

const BookingForm = () => {
    // eslint-disable-next-line no-use-before-define
    const [date, setDate] = setDate('');
    const [times, setTimes] = setDate('');
    const [guests] = setDate('');
    const [occasion] = setDate('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.SubmitForm(e);
        console.log(date,times,guests,occasion)
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
                    </fieldset>
                </form>
            </section>
        </haeder>
    );
};

export default BookingForm;