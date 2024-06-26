import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import BookList from './Components/BookCard/BookList';
import BookDtails from './Components/Donation/BookDtails';
import ListedBook from './Components/ListedBook/ListedBook';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/",
        element: <BookList></BookList>,
      },
      {
        path: "/bookdtails/:bookId",
        element: <BookDtails></BookDtails>,
      },
      {
        path: "/Listed",
        element: <ListedBook></ListedBook>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
