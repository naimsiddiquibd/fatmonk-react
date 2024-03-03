import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import Services from './Pages/Services/Services.jsx';
import UiUx from './Pages/UiUx/UiUx.jsx';
import BrandDesign from './Pages/BrandDesign/BrandDesign.jsx';
import Work from './Pages/Work/Work.jsx';
import Career from './Pages/Career/Career.jsx';
import ContactPage from './Pages/ContactPage/ContactPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/development",
    element: <Services></Services>
  },
  {
    path: "/uiuxdesign",
    element: <UiUx></UiUx>
  },
  {
    path: "/branddesign",
    element: <BrandDesign></BrandDesign>
  },
  {
    path: "/works",
    element: <Work></Work>
  },
  {
    path: "/career",
    element: <Career></Career>
  },
  {
    path: "/contact",
    element: <ContactPage></ContactPage>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
