'use client';
import { useState, useEffect } from 'react';

export interface HabitData {
  id: string;
  name: string;
  goal: number;
  completedDates: string[];
}

export function useHabitManagement() {
  const [habits, setHabits] = useState<HabitData[]>([]);

  useEffect(() => {
    const savedHabits = localStorage.getItem('habits');
    if (savedHabits) {
      try {
        const parsedHabits = JSON.parse(savedHabits);
        const validatedHabits = parsedHabits.map((habit: any) => ({
          ...habit,
          completedDates: habit.completedDates || [],
        }));
        setHabits(validatedHabits);
      } catch (error) {
        console.error('Error parsing saved habits:', error);
        setHabits([]);
      }
    }
  }, []);

  const toggleHabitCompletion = (habitId: string, dateStr: string) => {
    console.log('Toggling habit:', habitId, 'for date:', dateStr);
    setHabits((prevHabits) => {
      const updatedHabits = prevHabits.map((habit) => {
        if (habit.id === habitId) {
          const completedDates = habit.completedDates || [];
          const isCompleted = completedDates.includes(dateStr);
          const updatedCompletedDates = isCompleted
            ? completedDates.filter((date) => date !== dateStr)
            : [...completedDates, dateStr];

          console.log(
            'Updated habit:',
            habit.name,
            'completed dates:',
            updatedCompletedDates
          );
          return {
            ...habit,
            completedDates: updatedCompletedDates,
          };
        }
        return habit;
      });

      localStorage.setItem('habits', JSON.stringify(updatedHabits));
      return updatedHabits;
    });
  };

  const formatDateString = (year: number, month: number, day: number) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const getAchievedCount = (
    habit: HabitData,
    daysWithWeekdays: any[],
    year: number,
    month: number
  ) => {
    const monthDates = daysWithWeekdays.map((day) =>
      formatDateString(year, month, day.date)
    );
    const completedDates = habit.completedDates || [];
    return completedDates.filter((date) => monthDates.includes(date)).length;
  };

  return {
    habits,
    toggleHabitCompletion,
    formatDateString,
    getAchievedCount,
  };
}
