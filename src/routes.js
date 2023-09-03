import React, { lazy } from "react";

const About = lazy(() => import("pages/About"));
const Home = lazy(() => import("pages/Home"));
const NotFound = lazy(() => import("pages/NotFound"));
const Dashboard = lazy(() => import("pages/Dashboard"));

const routes = [
  {
    path: "*",
    page: <NotFound />,
  },
  {
    path: "/404",
    page: <NotFound />,
  },
  {
    path: "/Home",
    page: <Home />,
  },
  {
    path: "/about",
    page: <About />,
  },
  {
    path: "/",
    page: <Dashboard />,
  },
];

export default routes;
