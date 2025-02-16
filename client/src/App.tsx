import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselWithCards from './components/CarouselWithCards';


import Header from './components/header';

function App() {

  return (
    <div>
      <Header />
      <main className='container pt-5'>
        <Outlet />
        <CarouselWithCards />
      </main>
    </div>
  )
}

export default App
