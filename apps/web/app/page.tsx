import { WelcomeHeader, WelcomePage } from '../components';

export default function page() {
  return (
    <section className='h-screen-mobile bg-primary flex flex-col'>
      <WelcomeHeader />
      <WelcomePage />
    </section>
  );
}
