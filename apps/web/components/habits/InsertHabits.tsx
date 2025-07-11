export default function InsertHabits() {
  return (
    <section>
      <form className='flex flex-col gap-3'>
        <HabitInputSection
          labelName='Name'
          placeholder='Enter your habit name'
        />
        <HabitInputSection
          labelName='Goal Days'
          placeholder='Enter your habit goal days'
        />

        <button className='text-sm sm:text-base text-white font-sans font-semibold mt-2 sm:mt-5 px-8 py-3 bg-[#2F5249] rounded-xl'>
          Create Habit
        </button>
      </form>
    </section>
  );
}

function HabitInputSection({
  labelName,
  placeholder,
}: {
  labelName?: string;
  placeholder?: string;
}) {
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor='habit-description' className='font-serif text-lg'>
        {labelName}
      </label>
      <input
        type='text'
        placeholder={placeholder}
        className='text-base font-sans px-4 py-2 w-full sm:w-96 h-12 rounded-xl border border-gray-300 outline-none'
      />
    </div>
  );
}
