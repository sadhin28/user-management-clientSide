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
      },{
        path:"//addUser",
        element:<Addnewuser></Addnewuser>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
