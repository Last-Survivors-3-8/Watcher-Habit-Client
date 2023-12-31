import React from 'react';
import WeeklyHabitList from './WeeklyHabitList';
import DoubleCircleIcon from './icon/DoubleCircle';
import SquareArrowLeftIcon from './icon/SquareArrowLeft';
import SquareArrowRightIcon from './icon/SquareArrowRight';
import formatDate from './utils/formatDate';
import { DAYS_IN_KOREAN, DAYS_MAPPING } from '../../../constants/daysConstants';
import getDatesOfPeriod from '../../../utils/dateUtils';
import getStartAndEndOfWeek from '../../../utils/getStartAndEndOfWeek';
import useWeeklySchedule from '../../../hooks/useWeeklySchedule';
import Loading from '../../../lib/loading/Loading';

const WeeklySchedule = ({ modalContentRef, handleClose }) => {
  const { isLoading, weeklySchedule, setCurrentWeekStart, currentWeekStart } =
    useWeeklySchedule();

  const goToCurrentWeek = () => {
    setCurrentWeekStart(new Date());
  };

  const goToPreviousWeek = () => {
    const prevStartDate = new Date(currentWeekStart);
    prevStartDate.setDate(prevStartDate.getDate() - 7);
    setCurrentWeekStart(prevStartDate);
  };

  const goToNextWeek = () => {
    const nextStartDate = new Date(currentWeekStart);
    nextStartDate.setDate(nextStartDate.getDate() + 7);
    setCurrentWeekStart(nextStartDate);
  };

  const [startOfWeek, endOfWeek] = getStartAndEndOfWeek(currentWeekStart);

  const datesOfWeek = getDatesOfPeriod(startOfWeek, endOfWeek);

  const filteredRegularHabits = weeklySchedule.regular;
  const filteredHistoryHabits = weeklySchedule.history;

  const allRelevantHabits = datesOfWeek.flatMap((date) => {
    return filteredRegularHabits.filter((habit) => {
      const dayInKorean = DAYS_IN_KOREAN[date.getDay()];
      const isRelevantDay = habit.doDay.includes(
        Object.keys(DAYS_MAPPING).find(
          (key) => DAYS_MAPPING[key] === dayInKorean,
        ),
      );

      const currentDate = formatDate(date);
      const habitStartDateStr = formatDate(new Date(habit.habitStartDate));
      const habitEndDateStr = formatDate(new Date(habit.habitEndDate));

      const isWithinDateRange =
        currentDate >= habitStartDateStr && currentDate <= habitEndDateStr;

      return isRelevantDay && isWithinDateRange;
    });
  });

  const uniqueHabitTitles = Array.from(
    new Set(allRelevantHabits.map((habit) => habit.habitTitle)),
  ).sort((a, b) => {
    const habitA = allRelevantHabits.find((h) => h.habitTitle === a);
    const habitB = allRelevantHabits.find((h) => h.habitTitle === b);
    return habitA.startTime.localeCompare(habitB.startTime);
  });

  return (
    <article
      className='bg-dark-blue-bg border h-[75vh] w-[780px] border-customGreen relative rounded p-5 w-3/5 text-white rounded-xl overflow-hidden'
      ref={modalContentRef}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <header className='text-center font-extrabold'>주간계획표</header>
          <div className='flex justify-center my-4 ml-2'>
            <button
              onClick={goToPreviousWeek}
              className='hover:text-green-txt transition duration-150 ease-in-out flex items-center justify-center mx-1'
            >
              <SquareArrowLeftIcon />
            </button>
            <button
              onClick={goToCurrentWeek}
              className='hover:text-blue-500 transition duration-150 ease-in-out flex items-center justify-center mx-1'
            >
              <DoubleCircleIcon />
            </button>
            <button
              onClick={goToNextWeek}
              className='hover:text-green-txt transition duration-150 ease-in-out flex items-center justify-center mx-1'
            >
              <SquareArrowRightIcon />
            </button>
          </div>

          <button
            onClick={handleClose}
            className='absolute top-3 right-5 text-2xl text-white hover:text-red-600 transition duration-200 ease-in-out'
          >
            ×
          </button>

          <section className='flex'>
            <div className='bg-green-bg p-1 ml-1 mr-1 rounded-t-md text-center w-1/4 font-semibold'>
              Weekly List
            </div>
            {datesOfWeek.slice(0, 3).map((date) => (
              <div
                key={date}
                className='bg-green-bg p-1 ml-1 mr-1 rounded-t-md text-center w-1/4 font-semibold'
              >
                {DAYS_IN_KOREAN[date.getDay()]} ({date.getMonth() + 1}/
                {date.getDate()})
              </div>
            ))}
          </section>

          <section className='flex mb-4'>
            <div className='bg-gray-700 p-3 ml-1 mr-1 rounded-b-md overflow-y-auto h-[23vh] w-1/4 custom-scrollbar'>
              {uniqueHabitTitles.length > 0 ? (
                uniqueHabitTitles.map((habitTitle) => (
                  <div
                    key={habitTitle}
                    className='mb-2 bg-main-bg text-white p-2 m-1 rounded-lg break-words'
                  >
                    <p className='text-center text-sm'>{habitTitle}</p>
                  </div>
                ))
              ) : (
                <p className='text-center text-dark-gray-txt text-sm mt-2'>
                  등록된 습관이 없습니다
                </p>
              )}
            </div>

            {datesOfWeek.slice(0, 3).map((date) => (
              <WeeklyHabitList
                key={date}
                habits={filteredRegularHabits}
                historyHabits={filteredHistoryHabits}
                date={date}
              />
            ))}
          </section>

          <section className='flex'>
            {datesOfWeek.slice(3).map((date) => (
              <div
                key={date}
                className='bg-green-bg p-1 ml-1 mr-1 rounded-t-md text-center w-1/4 font-semibold'
              >
                {DAYS_IN_KOREAN[date.getDay()]} ({date.getMonth() + 1}/
                {date.getDate()})
              </div>
            ))}
          </section>

          <section className='flex mb-4'>
            {datesOfWeek.slice(3).map((date) => (
              <WeeklyHabitList
                key={date}
                habits={filteredRegularHabits}
                historyHabits={filteredHistoryHabits}
                date={date}
              />
            ))}
          </section>
        </>
      )}
    </article>
  );
};

export default WeeklySchedule;
