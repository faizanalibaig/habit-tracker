import { GrFormNext } from 'react-icons/gr';
import { GrFormPrevious } from 'react-icons/gr';

function Habits() {
  const month = new Date().toLocaleString('en-US', { month: 'long' });
  const year = new Date().getFullYear();

  return (
    <main className='mt-8'>
      <div className='flex justify-center items-center gap-1'>
        <GrFormPrevious className='cursor-pointer' />
        <h1 className='text-base sm:text-lg font-semibold font-serif'>
          {month}, {year}
        </h1>
        <GrFormNext className='cursor-pointer' />
      </div>
    </main>
  );
}

export default Habits;
