import React from "react";

const BookingForm = () => {
    const handleChange = (e) => {

    }
    return (
        <header>
            <section>
                <form>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date</label>
                            <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};
export default BookingForm;