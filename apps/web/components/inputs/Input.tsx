interface HabitInputSectionProps {
  labelName?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
  labelName,
  placeholder,
  onChange,
  value,
}: HabitInputSectionProps) {
  return (
    <div className='flex flex-col gap-2 w-[320px] sm:w-96'>
      <label
        htmlFor='habit-description'
        className='font-serif text-base sm:text-lg font-medium'
      >
        {labelName}
      </label>
      <input
        type='text'
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className='text-base font-sans px-4 py-2 w-auto sm:w-96 h-12  border border-gray-300 outline-none'
      />
    </div>
  );
}
