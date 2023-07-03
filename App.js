import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Body from "./components/Body";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import { About } from "./components/About";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    path: "/",
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
