import { Input } from '..';

export default function InsertHabits() {
  return (
    <section className='px-5 flex flex-1 justify-center mt-28'>
      <form className='flex flex-col gap-3'>
        <Input labelName='Name' placeholder='Enter your habit name' />
        <Input labelName='Goal Days' placeholder='Enter your habit goal days' />

        <button className='text-base sm:text-lg text-white font-sans font-semibold mt-2 sm:mt-5 px-8 py-3 bg-[#2F5249] rounded-xl'>
          Create Habit
        </button>
      </form>
    </section>
  );
}
