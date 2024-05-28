import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavbarMain from './components/navbarMain/NavbarMain.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavbarMain />
        <App />
      </>
    ),
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/register",
  //   element: <Registration />,
  // },
  // {
  //   path: "/modules/:id",
  //   element: (
  //     <>
  //       <Navbar2 /> <Modules /> <Footer />
  //     </>
  //   ),
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
