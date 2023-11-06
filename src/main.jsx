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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/allBooks',
        element: <AllBooks />
      },
      {
        path: '/addbook',
        element: <AddBook />
      },
      {
        path: "/details/:id",
        element: <Detail></Detail>,
        loader: ({ params }) => fetch(`http://localhost:5000/books/${params.id}`)
      },
      {
        path: '/categoryWiseBooks/:category',
        element: <CategoryBooks></CategoryBooks>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/books/?category=${params.category}`);
        }
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/books/${params.id}`)
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
);
