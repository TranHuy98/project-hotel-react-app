
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Booking.css';

const BookingDatePicker = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const calculateDateDifference = () => {
        if (startDate && endDate) {
            const diffInMilliseconds = Math.abs(endDate - startDate);
            const diffInDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));
            console.log('Difference in days:', diffInDays);
        }
    };
    return (
        <div className='date-pickers'>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Start Date"
                className='start-picker picker'
            />
            <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                placeholderText="End Date"
                className='end-picker picker'
            />
            
            
        </div>
    )
}

export default BookingDatePicker