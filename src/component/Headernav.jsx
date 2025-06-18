import React from 'react';
import { NavLink } from 'react-router-dom';

const Headernav = () => {
  const links=[
    {
      link:'/',
      name:'Home'
    },
    {
      link:'/user',
      name:'User'
    },
    {
      link:'/phones',
      name:'All Phones'
    },
    {
      link:'/addUser',
      name:'Add New User'
    },
    
  ]
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <li>
            {
            links.map(data=><NavLink to={data.link}>{data.name}</NavLink>)
          }
         </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu space-x-5 menu-horizontal px-1">
        
          {
            links.map(data=><NavLink to={data.link}>{data.name}</NavLink>)
          }
       
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Headernav;