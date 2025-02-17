import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselWithCards from './components/CarouselWithCards';
import Cards from './components/cards-movie'
import { useState } from 'react';


import Header from './components/header';
import Footer from './components/footer';
import './styles/app.css';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`page-container ${theme === 'dark' ? 'dark' : ''}`}>
      <Header />
      <main className="container pt-5">
        <Outlet />
        <CarouselWithCards />
        <Cards />
      </main>
      <Footer toggleTheme={toggleTheme} theme={theme} />
    </div>
  );
}

export default App
