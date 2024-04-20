import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';

// swiper
import {register} from 'swiper/element/bundle'

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

// router dom

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Contact from './pages/Contact.jsx';
import Casamento from './pages/Casamento.jsx'
import Galeria from './pages/Galeria.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Home from './pages/Home.jsx';
import Igreja from './pages/Igreja.jsx';
import AcoesSociais from './pages/AcoesSociais.jsx';
import Devocoes from './pages/Devocoes.jsx';
import VidaPastoral from './pages/VidaPastoral.jsx';
import Capelas from './pages/Capelas.jsx';
import Narcoticos from './pages/Narcoticos.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
        {
          path: 'home',
          element: <Home />
        },
        {
          path: 'contato',
          element: <Contact />
        },
        {
          path: 'casamentos',
          element: <Casamento />
        },
        {
          path: 'galeria',
          element: <Galeria />
        },
        {
          path: 'igreja',
          element: <Igreja />
        },
        {
          path: 'acao-social',
          element: <AcoesSociais />
        },
        {
          path: 'devocoes',
          element: <Devocoes />
        },
        {
          path: 'vida-pastoral',
          element: <VidaPastoral />
        },
        {
          path: 'capelas',
          element: <Capelas />
        },
        {
          path: 'narcoticos',
          element: <Narcoticos />
        },
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
