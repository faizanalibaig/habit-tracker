'use client';
import { GrFormNext } from 'react-icons/gr';
import { GrFormPrevious } from 'react-icons/gr';

import { getDaysWithWeekdays } from '../../hooks';
import { useState } from 'react';
import HabitLists from './HabitLists';

function Habits() {
  const currentDate = new Date();
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());

  const handlePreviousMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const monthName = new Date(year, month).toLocaleString('en-US', {
    month: 'long',
  });

  const daysWithWeekdays = getDaysWithWeekdays(year, month + 1);

  return (
    <main className='mt-8'>
      <div className='flex justify-center items-center gap-1'>
        <GrFormPrevious
          className='cursor-pointer'
          onClick={handlePreviousMonth}
        />
        <h1 className='text-base sm:text-lg font-semibold font-serif'>
          {monthName}, {year}
        </h1>
        <GrFormNext className='cursor-pointer' onClick={handleNextMonth} />
      </div>

      <div className='mt-8  h-16 flex border-y-2 border-black'>
        <div className='font-serif text-xl w-[8%] flex justify-center items-center border-x-2 border-black'>
          <h2>Habits</h2>
        </div>

        <div className='flex h-full w-[76%] '>
          <div className='h-full flex w-full'>
            {daysWithWeekdays.map((day, index) => {
              return (
                <div
                  key={index}
                  className='flex flex-col justify-evenly flex-1 border-r border-black last:border-r-0'
                >
                  <span className='text-center w-full text-sm border-b-2 border-black h-1/2'>
                    {day.weekday}
                  </span>
                  <span className='text-center w-full text-sm h-1/2'>
                    {day.date}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className='font-serif text-xl w-[8%] flex justify-center items-center  border-l-2 border-black'>
          <div className='h-1/2'>Goal</div>
        </div>

        <div className='font-serif text-xl w-[8%] flex justify-center items-center border-x-2 border-black'>
          <div className='h-1/2'>Achieved</div>
        </div>
      </div>

      <HabitLists />
    </main>
  );
}

export default Habits;
