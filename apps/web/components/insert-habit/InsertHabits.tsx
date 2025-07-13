'use client';
import { useState } from 'react';
import { Input } from '..';

export default function InsertHabits() {
  const [name, setName] = useState<string>('');
  const [goalDays, setGoalDays] = useState<string>('');

  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const handleCreateHabit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      if (!name.trim() || !goalDays.trim()) {
        setError('Please fill in all fields');
        return;
      }

      const parsedGoal = parseInt(goalDays, 10);
      if (isNaN(parsedGoal) || parsedGoal <= 0) {
        setError('Please enter a valid goal number');
        return;
      }

      const habitData = {
        name: name.trim(),
        goal: parsedGoal,
        progress: {},
        achieved: 0,
        completedDates: [],
      };

      const storedHabits = localStorage.getItem('habits');
      const newStreak = localStorage.getItem('streak');

      if (!newStreak) {
        localStorage.setItem('streak', '0');
      }

      localStorage.setItem(
        'habits',
        JSON.stringify([...JSON.parse(storedHabits || '[]'), habitData])
      );

      setSuccess(true);
      setName('');
      setGoalDays('');
    } catch (error: any) {
      setError(`Failed to create habit. Please try again. ${error.message}`);
    }
  };

  return (
    <section className='px-5 flex flex-1 justify-center mt-28'>
      <form className='flex flex-col gap-3' onSubmit={handleCreateHabit}>
        {error && (
          <div className='text-red-600 text-sm text-center font-sans'>
            {error}
          </div>
        )}

        {success && (
          <div className='text-primary text-sm text-center font-sans'>
            Habit created successfully!
          </div>
        )}

        <Input
          labelName='Name'
          placeholder='Enter your habit name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          labelName='Goal Days'
          placeholder='Enter your habit goal days'
          value={goalDays}
          onChange={(e) => setGoalDays(e.target.value)}
        />

        <button className='text-base text-white font-sans font-semibold mt-2 sm:mt-5 px-8 py-3 bg-primary'>
          Create Habit
        </button>
      </form>
    </section>
  );
}
