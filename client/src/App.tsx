import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselWithCards from './components/CarouselWithCards';
import Cards from './components/cards-movie'


import Header from './components/header';

function App() {

  return (
    <div>
      <Header />
      <main className='container pt-5'>
        <Outlet />
        <CarouselWithCards />
        <Cards />
      </main>
    </div>
  )
}

export default App
