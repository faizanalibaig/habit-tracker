'use client';

interface DayWithWeekday {
  date: number;
  weekday: string;
}

interface HabitData {
  id: string;
  name: string;
  goal: number;
  completedDates: string[];
}

interface HabitRowProps {
  habit: HabitData;
  daysWithWeekdays: DayWithWeekday[];
  year: number;
  month: number;
  onToggleCompletion: (habitId: string, dateStr: string) => void;
  formatDateString: (year: number, month: number, day: number) => string;
  getAchievedCount: (habit: HabitData) => number;
}

export default function HabitRow({
  habit,
  daysWithWeekdays,
  year,
  month,
  onToggleCompletion,
  formatDateString,
  getAchievedCount,
}: HabitRowProps) {
  return (
    <div className='h-8 flex border-b border-l border-r border-black relative'>
      {/* Habit Name Column - 8% */}
      <div className='font-serif text-lg w-[8%] min-w-[80px] flex justify-center items-center border-r border-black bg-white z-10 sticky left-0'>
        <h2 className='truncate px-2'>{habit.name}</h2>
      </div>

      {/* Scrollable Dates Container - 76% (dates only) */}
      <div
        className='w-[76%] overflow-x-auto scrollbar-hide'
        id={`habit-scroll-${habit.id}`}
      >
        <div className='flex h-8 w-full'>
          <div className='flex h-full w-full'>
            {daysWithWeekdays.map((day, dayIndex) => {
              const dateStr = formatDateString(year, month, day.date);
              const completedDates = habit.completedDates || [];
              const isCompleted = completedDates.includes(dateStr);

              const handleClick = (e: React.MouseEvent) => {
                e.preventDefault();
                e.stopPropagation();
                onToggleCompletion(habit.id, dateStr);
              };

              return (
                <div
                  key={`${habit.id}-${dateStr}`}
                  className={`flex flex-col justify-center items-center flex-1 min-w-[32px] border-r border-black cursor-pointer hover:bg-gray-100 last:border-r-0 ${
                    isCompleted ? 'bg-green-200' : ''
                  }`}
                  onClick={handleClick}
                >
                  <span className='text-center w-full text-xs'>
                    {isCompleted ? '✓' : ''}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fixed Goal Column - 8% */}
      <div className='font-serif text-base w-[8%] min-w-[60px] flex justify-center items-center border-l border-r border-black bg-white'>
        <div>{habit.goal}</div>
      </div>

      {/* Fixed Achieved Column - 8% */}
      <div className='font-serif text-base w-[8%] min-w-[60px] flex justify-center items-center border-l border-black bg-white'>
        <div>{getAchievedCount(habit)}</div>
      </div>
    </div>
  );
}
