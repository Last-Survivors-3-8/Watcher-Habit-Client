import React, { useState } from 'react';
import WeeklyScheduleModal from '../modals/weeklySchedule/WeeklyScheduleModal';
import WeeklyHabitsListIcon from './icon/WeeklyHabitsList';

const WeeklyScheduleButton = ({ isHovered }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);

    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);

    document.body.style.overflow = '';
  };

  return (
    <>
      <div
        onClick={handleButtonClick}
        className={`flex items-center text-customGray hover:text-customDarkGray hover:font-bold mb-10 p-3 ${
          isHovered ? 'w-[210px]' : ''
        }`}
        style={{ cursor: 'pointer' }}
      >
        <WeeklyHabitsListIcon />
        {isHovered && <span className='ml-3'>나의 주간 습관</span>}
      </div>

      {isModalOpen && <WeeklyScheduleModal onClose={handleCloseModal} />}
    </>
  );
};

export default WeeklyScheduleButton;
