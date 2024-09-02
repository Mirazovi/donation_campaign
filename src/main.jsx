import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home';
import Donations from './Components/Donations';
import CartDetails from './Components/CartDetails';
import Error from './Components/Error';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'donation',
        element:<Donations></Donations>,
        loader: ()=> fetch('donation.json')
      },
      {
        path:'/cart/:id',
        element: <CartDetails></CartDetails>,
        loader: ()=> fetch('donation.json')
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
