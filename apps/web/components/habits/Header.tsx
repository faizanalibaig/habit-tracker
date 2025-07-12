import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex justify-between items-center py-8'>
      <h1 className='text-lg sm:text-xl font-semibold font-serif'>
        Habit Tracker
      </h1>
      <nav>
        <Link href='/insert-habit'>
          <button className='px-8 py-3 text-sm sm:text-base text-white font-sans font-semibold bg-primary'>
            Insert Habit
          </button>
        </Link>
      </nav>
    </header>
  );
}
