import { Habits, Header } from '../../components';

export default function page() {
  return (
    <div className='px-6 sm:px-12'>
      <Header />
      <Habits />
    </div>
  );
}
