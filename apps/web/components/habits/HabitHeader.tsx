'use client';

interface DayWithWeekday {
  date: number;
  weekday: string;
}

interface HabitHeaderProps {
  daysWithWeekdays: DayWithWeekday[];
}

export default function HabitHeader({ daysWithWeekdays }: HabitHeaderProps) {
  return (
    <div className='w-full h-16 flex border border-black relative'>
      <div className='font-serif text-xl w-[8%] min-w-[80px] flex justify-center items-center border-r border-black bg-white z-10 sticky left-0'>
        <h2>Habits</h2>
      </div>

      <div
        className='w-[76%] overflow-x-auto scrollbar-hide'
        id='header-scroll'
      >
        <div className='flex h-16 w-full'>
          <div className='flex h-full w-full'>
            {daysWithWeekdays.map((day, index) => {
              return (
                <div
                  key={`${day.date}-${day.weekday}`}
                  className='flex flex-col justify-evenly flex-1 min-w-[32px] border-r border-black last:border-r-0'
                >
                  <span className='text-center w-full text-xs border-b border-black h-1/2 flex items-center justify-center'>
                    {day.weekday}
                  </span>
                  <span className='text-center w-full text-xs h-1/2 flex items-center justify-center'>
                    {day.date}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className='font-serif text-lg w-[8%] min-w-[60px] flex justify-center items-center border-l border-r border-black bg-white'>
        <div>Goal</div>
      </div>

      <div className='font-serif text-lg w-[8%] min-w-[60px] flex justify-center items-center border-l border-black bg-white'>
        <div>Achieved</div>
      </div>
    </div>
  );
}
