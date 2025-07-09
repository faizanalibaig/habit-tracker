import { WelcomeHeader, WelcomePage } from '../components';

export default function page() {
  return (
    <section className='h-screen-mobile bg-[#2F5249] flex flex-col'>
      <WelcomeHeader />
      <WelcomePage />
    </section>
  );
}
