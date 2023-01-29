import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import PaginaInicial from './assets/pages/PaginaInicial';
import Products from './assets/pages/Products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <PaginaInicial />
      },
      {
        path: '/produtos',
        element: <Products />
      }
    ]
  }
], { basename: "/PubDoWesley/" })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
