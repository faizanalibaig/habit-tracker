import Image from 'next/image';

export default function page() {
  return (
    <main className='h-screen bg-[#2F5249] flex flex-col'>
      <header className='h-20 flex items-center justify-between px-10 flex-shrink-0'>
        <Image src='/logo.png' alt='Habit Tracker Logo' className='w-8' />
        <h2 className='text-base font-sans font-medium text-white'>
          streak - zero days
        </h2>
      </header>
      <section className='flex-1 flex flex-col gap-8 justify-center items-center text-white'>
        <h1 className='text-8xl font-serif font-bold'>Habit Tracker</h1>
        <button className='px-5 py-3 bg-white text-[#2F5249] font-semibold rounded-full'>
          Get Started
        </button>
      </section>
    </main>
  );
}
