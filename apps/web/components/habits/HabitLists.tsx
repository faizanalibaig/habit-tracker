'use client';
import { useEffect, useState } from 'react';

interface HabitListsProps {
  name: string;
  goal: number;
  progress: Record<string, boolean>;
  achieved: number;
}

export default function HabitLists() {
  const [habits, setHabits] = useState<HabitListsProps[]>([]);

  useEffect(() => {
    const habitData = JSON.parse(localStorage.getItem('habits') || '[]');
    setHabits(habitData);
  }, []);

  return (
    <>
      {habits.map((habit: HabitListsProps, index: number) => (
        <div key={index} className='h-8 flex border-b-2 border-black'>
          <div className='font-serif text-lg w-[8%] flex justify-center items-center border-x-2 border-black'>
            <h2>{habit.name}</h2>
          </div>

          <div className='flex h-full w-[76%] '>
            <div className='h-full flex w-full'>
              {Object.entries(habit.progress || {}).map(
                ([date, isCompleted], index) => (
                  <div
                    key={index}
                    className='flex flex-col justify-evenly flex-1 border-r border-black last:border-r-0'
                  >
                    <span className='text-center w-full'>
                      {isCompleted ? '✓' : ''}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          <div className='font-serif text-base w-[8%] flex justify-center items-center  border-l-2 border-black'>
            <div className=''>{habit.goal}</div>
          </div>

          <div className='font-serif text-base w-[8%] flex justify-center items-center border-x-2 border-black'>
            <div className=''>{habit.achieved}</div>
          </div>
        </div>
      ))}
    </>
  );
}
