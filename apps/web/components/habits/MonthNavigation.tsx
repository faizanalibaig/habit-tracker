'use client';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

interface MonthNavigationProps {
  monthName: string;
  year: number;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
}

export default function MonthNavigation({
  monthName,
  year,
  onPreviousMonth,
  onNextMonth,
}: MonthNavigationProps) {
  return (
    <div className='flex justify-center items-center gap-1 mb-4'>
      <GrFormPrevious
        className='cursor-pointer hover:text-blue-600 transition-colors'
        onClick={onPreviousMonth}
      />
      <h1 className='text-base sm:text-lg font-semibold font-serif'>
        {monthName}, {year}
      </h1>
      <GrFormNext
        className='cursor-pointer hover:text-blue-600 transition-colors'
        onClick={onNextMonth}
      />
    </div>
  );
}
