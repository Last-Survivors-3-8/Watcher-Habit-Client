import React, { useState } from 'react';
import validationMessages from './message/validationMessages';

const DateForm = ({
  habitStartDate,
  setHabitStartDate,
  habitEndDate,
  setHabitEndDate,
}) => {
  const today = new Date().toISOString().split('T')[0];
  const [startDateValidation, setStartDateValidation] = useState('');
  const [endDateValidation, setEndDateValidation] = useState('');

  const handleStartDateChange = (e) => {
    setHabitStartDate(e.target.value);

    if (!e.target.value) {
      setStartDateValidation(validationMessages.startDateEmpty);
    } else {
      setStartDateValidation('');
    }

    if (habitEndDate && new Date(e.target.value) > new Date(habitEndDate)) {
      setEndDateValidation(validationMessages.endDateAfterStart);
    } else {
      setEndDateValidation('');
    }
  };

  const handleEndDateChange = (e) => {
    setHabitEndDate(e.target.value);

    if (!e.target.value) {
      setEndDateValidation(validationMessages.endDateEmpty);
    } else if (new Date(e.target.value) < new Date(habitStartDate)) {
      setEndDateValidation(validationMessages.endDateAfterStart);
    } else {
      setEndDateValidation('');
    }
  };

  return (
    <>
      <label className='text-white ml-2'>
        기한*
        {startDateValidation && (
          <span className='text-red-500 ml-2'>{startDateValidation}</span>
        )}
        {endDateValidation && (
          <span className='text-red-500 ml-2'>{endDateValidation}</span>
        )}
      </label>
      <div className='flex items-center mb-4 mt-2'>
        <div className='flex-grow'>
          <input
            className='p-2 border-2 border-gray-500 shadow-lg rounded bg-dark-blue-bg text-white'
            type='date'
            value={habitStartDate}
            min={today}
            onChange={handleStartDateChange}
            placeholder='Start Date'
          />
        </div>
        <div className='mx-2 text-3xl text-white mt-[-1.2rem]'>~</div>
        <div className='flex-grow'>
          <input
            className='p-2 border-2 border-gray-500 shadow-lg rounded bg-dark-blue-bg text-white'
            type='date'
            value={habitEndDate}
            min={habitStartDate}
            onChange={handleEndDateChange}
            placeholder='End Date'
          />
        </div>
      </div>
    </>
  );
};

export default DateForm;
