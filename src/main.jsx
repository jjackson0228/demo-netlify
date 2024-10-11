import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/', //root/home route
    element: <App />, //element to load on root/home route
    errorElement: <Error />, // in case of error
    children: [
      {
        index: true, // index true, When first visited app home is the first page rendered inside
        element: <Home />, //home will be first component rendered
      },
      {
        path: '/About', // not our home page but when we go to this route we go to About page
        element: <About />,
      },
      {
        path: '/Blog',
        element: <Blog />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
