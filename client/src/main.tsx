import "./index.css";
import Auth from "./utils/auth.ts";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate, useParams } from "react-router-dom";

import App from "./App.tsx";
import Login from "./pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";
import Movies from "./pages/Movies.tsx";
import TVShows from "./pages/TVShows.tsx";
import Library from "./pages/Library.tsx";
import Contact from "./pages/Contact.tsx";
import Details from "./pages/Details.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

// Link to individual Movie/TV Show Page
const DetailsWrapper = () => {
  const { id } = useParams();
  return <Details id={Number(id)} />;
};

// Protected Route Component so that if user is not signed in, they cannot access the website
const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  return Auth.loggedIn() ? element : <Navigate to="/" replace />;
};
export default ProtectedRoute;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: Auth.loggedIn() ? (<Navigate to="/" replace />) : (<Login />)
      },
      {
        path: "/Signup",
        element: <SignUp />,
      },
      {
        path: "/Movies",
        element: <ProtectedRoute element={<Movies />} />,
      },
      {
        path: "/TVShows",
        element: <ProtectedRoute element={<TVShows />} />,
      },
      {
        path: "/Library",
        element: <ProtectedRoute element={<Library />} />,
      },
      {
        path: "/Contact",
        element: <ProtectedRoute element={<Contact />} />,
      },
      {
        path: "/Details/:id",
        element: <ProtectedRoute element={<DetailsWrapper />} />,
      }
    ]
  }
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
