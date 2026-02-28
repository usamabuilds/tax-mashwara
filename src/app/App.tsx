import { Outlet } from 'react-router-dom';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { WhatsAppButton } from '../components/shared/WhatsAppButton';

export const App = () => {
  return (
    <div className="min-h-screen bg-base text-text">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
