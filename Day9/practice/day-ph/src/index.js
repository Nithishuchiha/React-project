import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Navbar from "./component/navbar";
import Navbar from "./component/Navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { About } from "./component/about";
import Contact from "./component/contact";
import Home from "./component/home";
// import SInger from "./component/SInger";
// import { Albums } from "./component/Albums";
// import Home from "./component/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />,
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
