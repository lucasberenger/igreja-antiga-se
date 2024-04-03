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
import ErrorPage from './pages/ErrorPage.jsx';
import Home from './pages/Home.jsx';
import Igreja from './pages/Igreja.jsx';


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
          path: 'igreja',
          element: <Igreja />
        },
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
