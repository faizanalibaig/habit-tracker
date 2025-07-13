'use client';
import { useState } from 'react';
import {
  useHabitManagement,
  useScrollSync,
  getDaysWithWeekdays,
} from '../../hooks';

import { HabitHeader, HabitRow, MonthNavigation } from '.';

export default function Habits() {
  const currentDate = new Date();
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());

  const { habits, toggleHabitCompletion, formatDateString, getAchievedCount } =
    useHabitManagement();

  useScrollSync(habits);

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
      <section>
        <MonthNavigation
          monthName={monthName}
          year={year}
          onPreviousMonth={handlePreviousMonth}
          onNextMonth={handleNextMonth}
        />

        <HabitHeader daysWithWeekdays={daysWithWeekdays} />

        {habits.map((habit) => (
          <HabitRow
            key={habit.id}
            habit={habit}
            daysWithWeekdays={daysWithWeekdays}
            year={year}
            month={month}
            onToggleCompletion={toggleHabitCompletion}
            formatDateString={formatDateString}
            getAchievedCount={(habit) =>
              getAchievedCount(habit, daysWithWeekdays, year, month)
            }
          />
        ))}
      </section>
    </main>
  );
}
