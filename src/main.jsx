import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import AuthProvider from "./AuthProvider/AuthProvider";
import Root from "./Root/Root";
import AddBook from "./Pages/Add Book/AddBook";
import AllBooks from "./Pages/All Books/AllBooks";
import '@smastrom/react-rating/style.css'
import Detail from "./Pages/Details/Detail";
import CategoryBooks from "./Pages/CategoryBooks/CategoryBooks";
import Update from "./Pages/Update/Update";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Error from "./Pages/Error/Error";
import BorrowedBooks from "./Pages/BorrowedBooks/BorrowedBooks";
// import PDF from "./Pages/Details/PDF/PDF";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />
      },
      // {
      //   path: '/pdf/:id',
      //   element: <PDF></PDF>,
      //   loader: ({ params }) => fetch(`https://library-management-system-server-khaki.vercel.app/books/${params.id}`)
      // },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/allBooks',
        element: <PrivateRoute><AllBooks /></PrivateRoute>,
      },
      {
        path: '/addbook',
        element: <PrivateRoute><AddBook /></PrivateRoute>,
      },
      {
        path: '/borrowedBooks',
        element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>,
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><Detail></Detail></PrivateRoute>,
        loader: ({ params }) => fetch(`https://library-management-system-server-khaki.vercel.app/books/${params.id}`)
      },
      {
        path: '/categoryWiseBooks/:category',
        element: <PrivateRoute><CategoryBooks></CategoryBooks></PrivateRoute>,
        loader: ({ params }) => {
          return fetch(`https://library-management-system-server-khaki.vercel.app/books/?category=${params.category}`);
        }
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({ params }) => fetch(`https://library-management-system-server-khaki.vercel.app/books/${params.id}`)
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
);
