import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App'; 
import Home from './components/Home';
import Tabla from './components/Tabla';
import Contact from './components/Contact';
import Contenedor from './components/contenedor';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Contenedor/>
      },
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/tabla',
        element: <Tabla/>
      },
      {
        path: '/contact',
        element: <Contact/>
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
