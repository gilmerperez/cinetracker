import './index.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home.tsx'; // We need to replace Home with one of these pages, /Movies?

import App from './App.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Movies from './pages/movies.tsx';
import TVShows from './pages/tvshows.tsx';
import Library from './pages/library.tsx';
import Contact from './pages/contact.tsx';
import Login from './pages/Login.tsx';
import SignUp from './pages/SignUp.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      {
        path: '/Movies',
        element: <Movies />
      }, 
      {
        path: '/TVShows',
        element: <TVShows />
      },
      {
        path: '/Library',
        element: <Library />
      },
      {
        path: '/Contact',
        element: <Contact />
      },
      {
        path: '/Login',
        element: <Login />
      },
      {
        path: '/Signup',
        element: <SignUp />
      },
    ]
  }
])

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
