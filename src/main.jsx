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
import Ruby from './Pages/Ruby/Ruby.jsx';
import UiUxJob from './Pages/UiUxJob/UiUxJob.jsx';
import JrDev from './Pages/JrDev/JrDev.jsx';
import Planner from './Pages/Planner/Planner.jsx';
import HostingPage from './Pages/Hosting/HostingPage.jsx';
import Plans from './Pages/Plans/Plans.jsx';
import InternDeveloper from './Pages/InternDeveloper/InternDeveloper.jsx';
import WordPressDeveloper from './Pages/WordpressDeveloper/WordpressDeveloper.jsx';

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
    path: "/hosting",
    element: <HostingPage></HostingPage>
  },
  {
    path: "/plans",
    element: <Plans></Plans>
  },
  {
    path: "/career",
    element: <Career></Career>
  },
  {
    path: "/contact",
    element: <ContactPage></ContactPage>
  },
  {
    path: "/ruby-on-rails-developer",
    element: <Ruby></Ruby>
  },
  {
    path: "/ui-ux-designer",
    element: <UiUxJob></UiUxJob>
  },
  {
    path: "/software-engineer",
    element: <JrDev></JrDev>
  },
  {
    path: "/planner",
    element: <Planner></Planner>
  },
  {
    path: "/career/ruby-on-rails-developer",
    element: <Ruby></Ruby>
  },
  {
    path: "/career/ui-ux-designer",
    element: <UiUxJob></UiUxJob>
  },
  {
    path: "/career/software-engineer",
    element: <JrDev></JrDev>
  },
  {
    path: "/career/planner",
    element: <Planner></Planner>
  },
  {
    path: "/career/intern-developer",
    element: <InternDeveloper></InternDeveloper>
  },
  {
    path: "/career/wordpress-developer",
    element: <WordPressDeveloper></WordPressDeveloper>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
