import { InsertHabitHeader, InsertHabits } from '../../components';

export default function page() {
  return (
    <main className='h-dvh flex flex-col'>
      <InsertHabitHeader />
      <InsertHabits />
    </main>
  );
}
