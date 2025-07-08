import Image from 'next/image';

export default function Header() {
  return (
    <header className='h-20 flex items-center justify-between px-10 flex-shrink-0'>
      <Image
        src='/logo.png'
        alt='Habit Tracker Logo'
        width={30}
        height={25}
        priority={true}
      />
      <h2 className='text-base font-sans font-medium text-white'>
        streak - zero days
      </h2>
    </header>
  );
}
