import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainH from './Main/MainH';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainH></MainH>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='bg-red-50 h-fit'>
    <RouterProvider router={router} />
  </div>
)
