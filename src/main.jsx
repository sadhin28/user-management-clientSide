import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root.jsx';
import Allphones from './component/Allphones.jsx';
import Detailsphone from './component/Detailsphone.jsx';
import User from './component/User.jsx';
import Addnewuser from './component/Addnewuser.jsx';
import Update from './component/Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/phones',
        element:<Allphones></Allphones>,
        loader:()=>fetch('http://localhost:5000/phones')
      
      },
      {
        path:'/phones/:id',
        element:<Detailsphone></Detailsphone>,
         oader:({params})=>fetch( `http://localhost:5000/phones/${params.id}`)
      },
      {
        path:'/user',
        element:<User></User>,
        loader:()=>fetch('http://localhost:5000/users')
      },
      {
        path:"/addUser",
        loader:()=>fetch('http://localhost:5000/userss'),
        element:<Addnewuser></Addnewuser>
      },
      {
        path:"//update/:id",
        element:<Update></Update>,
        loader:({params})=>fetch(`http://localhost:5000/userss/${params.id}`)
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
