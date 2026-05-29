import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTopButton from './components/ScrollToTopButton';
import LoadingScreen from './components/LoadingScreen';
import HomePage from './pages/HomePage';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isVisible={isLoading} />
      <ScrollProgress />
      <Navbar />
      <main id="content" className="relative">
        <HomePage />
      </main>
      <ScrollToTopButton />
    </>
  );
}
