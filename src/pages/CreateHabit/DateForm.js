import React from 'react';

const DateForm = ({
  habitStartDate,
  setHabitStartDate,
  habitEndDate,
  setHabitEndDate,
}) => {
  const today = new Date().toISOString().split('T')[0];

  return (
    <div>
      <label>기한</label>
      <div className='grid grid-cols-2 gap-4 mb-4'>
        <input
          className='p-2 border rounded'
          type='date'
          value={habitStartDate}
          min={today}
          onChange={(e) => setHabitStartDate(e.target.value)}
          placeholder='Start Date'
        />
        <input
          className='p-2 border rounded'
          type='date'
          value={habitEndDate}
          min={habitStartDate}
          onChange={(e) => setHabitEndDate(e.target.value)}
          placeholder='End Date'
        />
      </div>
    </div>
  );
};

export default DateForm;