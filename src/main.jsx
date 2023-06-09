import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/LayOut/Home';
import Shop from './Components/shop/Shop';
import Orders from './Components/Orders/Orders';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import cartProductsLoader from './Loaders/cartProductsLoader';
import CheckOut from './Components/CheckOut/CheckOut';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<Shop></Shop>
      },
      {
        path:'/orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path:'/inventory',
        element:<Inventory></Inventory>
      },
      {
        path:'/checkout',
        element: <CheckOut></CheckOut>
      },
      {
        path:'/login',
        element: <Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
