import React from "react";

const BookingForm = () => {
    return (
        <header>
            <section>
                <form>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date</label>
                            <input id='book-date' value={date} type='date' required/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};
export default BookingForm;