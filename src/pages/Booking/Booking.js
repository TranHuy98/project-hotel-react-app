import React from 'react'
import { useState, useEffect } from 'react';

const Booking = () => {

  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className='booking container-fluid d-flex flex-column justify-content-start align-items-center'>
        <h1>Booking</h1>

        <div className='booking-options container d-flex flex-column justify-content-start align-items-center'>
          <div className='booking-field'>
            <h2>Loại phòng: </h2>
            <select value={selectedOption} onChange={handleOptionChange}>
              <option value="">Chọn một tùy chọn</option>
              <option value="option1">Tùy chọn 1</option>
              <option value="option2">Tùy chọn 2</option>
              <option value="option3">Tùy chọn 3</option>
            </select>
          </div>
          <div className='booking-field'>
            <h2>Loại phòng: </h2>
            <select value={selectedOption} onChange={handleOptionChange}>
              <option value="">Chọn một tùy chọn</option>
              <option value="option1">Tùy chọn 1</option>
              <option value="option2">Tùy chọn 2</option>
              <option value="option3">Tùy chọn 3</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default Booking