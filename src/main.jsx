import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Services from "./Pages/Services/Services.jsx";
import UiUx from "./Pages/UiUx/UiUx.jsx";
import BrandDesign from "./Pages/BrandDesign/BrandDesign.jsx";
import Work from "./Pages/Work/Work.jsx";
import Career from "./Pages/Career/Career.jsx";
import ContactPage from "./Pages/ContactPage/ContactPage.jsx";
import Ruby from "./Pages/Ruby/Ruby.jsx";
import UiUxJob from "./Pages/UiUxJob/UiUxJob.jsx";
import JrDev from "./Pages/JrDev/JrDev.jsx";
import Planner from "./Pages/Planner/Planner.jsx";
import HostingPage from "./Pages/Hosting/HostingPage.jsx";
import Plans from "./Pages/Plans/Plans.jsx";
import InternDeveloper from "./Pages/InternDeveloper/InternDeveloper.jsx";
import WordPressDeveloper from "./Pages/WordpressDeveloper/WordpressDeveloper.jsx";
import Events from "./Pages/Events/Events.jsx";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.jsx";
import SoftDev from "./Pages/SoftDev/SoftDev.jsx";
import ProductsPage from "./Pages/Products/ProductsPage.jsx";
import JrPhpDev from "./Pages/JrPhpDev/JrPhpDev.jsx";
import JrMernDev from "./Pages/JrMernDev/JrMernDev.jsx";
import ThreadwelPage from "./Pages/Threadwel/ThreadwelPage.jsx";
import WebDevPage from "./Pages/WebDev/WebDevPage.jsx";
import BlogPage from "./Pages/Blog/BlogPage.jsx";
import BlogDetailsPage from "./Pages/Blog Details/BlogDetailsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ScrollToTop>
        <Home></Home>
      </ScrollToTop>
    ),
  },
  {
    path: "/development",
    element: (
      <ScrollToTop>
        <Services></Services>
      </ScrollToTop>
    ),
  },
  {
    path: "/web-development",
    element: (
      <ScrollToTop>
        <WebDevPage />
      </ScrollToTop>
    ),
  },
  {
    path: "/blogs",
    element: (
      <ScrollToTop>
        <BlogPage />
      </ScrollToTop>
    ),
  },
  {
    path: "/blogs/:id",
    element: (
      <ScrollToTop>
        <BlogDetailsPage />
      </ScrollToTop>
    ),
  },
  {
    path: "/uiuxdesign",
    element: (
      <ScrollToTop>
        <UiUx></UiUx>
      </ScrollToTop>
    ),
  },
  {
    path: "/branddesign",
    element: (
      <ScrollToTop>
        <BrandDesign></BrandDesign>
      </ScrollToTop>
    ),
  },
  {
    path: "/events",
    element: (
      <ScrollToTop>
        <Events></Events>
      </ScrollToTop>
    ),
  },
  {
    path: "/software_development",
    element: (
      <ScrollToTop>
        <SoftDev></SoftDev>
      </ScrollToTop>
    ),
  },
  {
    path: "/works",
    element: (
      <ScrollToTop>
        <Work></Work>
      </ScrollToTop>
    ),
  },
  {
    path: "/works/threadwel",
    element: (
      <ScrollToTop>
        <ThreadwelPage />
      </ScrollToTop>
    ),
  },
  {
    path: "/hosting",
    element: (
      <ScrollToTop>
        <HostingPage></HostingPage>
      </ScrollToTop>
    ),
  },
  {
    path: "/products",
    element: (
      <ScrollToTop>
        <ProductsPage></ProductsPage>
      </ScrollToTop>
    ),
  },
  {
    path: "/plans",
    element: (
      <ScrollToTop>
        <Plans></Plans>
      </ScrollToTop>
    ),
  },
  {
    path: "/career",
    element: (
      <ScrollToTop>
        <Career></Career>
      </ScrollToTop>
    ),
  },
  {
    path: "/contact",
    element: (
      <ScrollToTop>
        <ContactPage></ContactPage>
      </ScrollToTop>
    ),
  },
  {
    path: "/ruby-on-rails-developer",
    element: (
      <ScrollToTop>
        <Ruby></Ruby>
      </ScrollToTop>
    ),
  },
  {
    path: "/ui-ux-designer",
    element: (
      <ScrollToTop>
        <UiUxJob></UiUxJob>
      </ScrollToTop>
    ),
  },
  {
    path: "/software-engineer",
    element: (
      <ScrollToTop>
        <JrDev></JrDev>
      </ScrollToTop>
    ),
  },
  {
    path: "/planner",
    element: (
      <ScrollToTop>
        <Planner></Planner>
      </ScrollToTop>
    ),
  },
  {
    path: "/career/ruby-on-rails-developer",
    element: (
      <ScrollToTop>
        <Ruby></Ruby>
      </ScrollToTop>
    ),
  },
  {
    path: "/career/ui-ux-designer",
    element: (
      <ScrollToTop>
        <UiUxJob></UiUxJob>
      </ScrollToTop>
    ),
  },
  {
    path: "/career/software-engineer",
    element: (
      <ScrollToTop>
        <JrDev></JrDev>
      </ScrollToTop>
    ),
  },
  {
    path: "/career/php-developer",
    element: (
      <ScrollToTop>
        <JrPhpDev />
      </ScrollToTop>
    ),
  },
  {
    path: "/career/mern-developer",
    element: (
      <ScrollToTop>
        <JrMernDev />
      </ScrollToTop>
    ),
  },
  {
    path: "/career/planner",
    element: (
      <ScrollToTop>
        <Planner></Planner>
      </ScrollToTop>
    ),
  },
  {
    path: "/career/intern-developer",
    element: (
      <ScrollToTop>
        <InternDeveloper></InternDeveloper>
      </ScrollToTop>
    ),
  },
  {
    path: "/career/wordpress-developer",
    element: (
      <ScrollToTop>
        <WordPressDeveloper></WordPressDeveloper>
      </ScrollToTop>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
