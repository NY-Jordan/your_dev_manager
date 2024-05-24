import React, { useState } from 'react'
import { useResponsive } from '../../../Application/Hooks/useResponsive'
import Icon from '@mdi/react';
import { mdiHamburger, mdiMenu, mdiMenuUp } from '@mdi/js';
import VerticalNavBarContains from './VerticalNavBarContains';
import { logout } from '../../../Application/Helpers/Actions';
import {  useNavigate } from 'react-router-dom';
import Notification from '../Notification/Notification';

export default function NavBar() {
  const {isTabletOrMobile} = useResponsive();
  const navigate = useNavigate();
  const [activeNotification , setActiveNotification]  = useState(false);
  
  const handleLogout = () => {
    logout();
    navigate(0);

  }
  return (
    <div className="navbar  bg-blue-500">
      <div className="navbar-start">
        {isTabletOrMobile ?  
        <div className="drawer">
          < input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="btn btn-ghost text-white drawer-button"><Icon path={mdiMenu} size={2} /></label>
          </div> 
          <div className="drawer-side z-50">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <div className='text-4xl mb-10'>DevHandle</div>
                <VerticalNavBarContains />
                
              </ul>
          </div>
        </div>
        : 
        <a className="btn btn-ghost text-xl text-white">Your Dev Manager</a>}
      </div>
  <div className="navbar-center">
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    

    <div className="dropdown dropdown-end">
      <button onClick={() => setActiveNotification(!activeNotification)} className={"btn btn-ghost  btn-circle "+(activeNotification ? 'bg-slate-600/[.3]' : '')}>
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          <span className="badge  badge-xs badge-secondary indicator-item"></span>
        </div>
      </button>
    </div>
    

    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://pics.craiyon.com/2023-09-30/a33676a35ca7491ebec9d3ffeb7faf01.webp" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a onClick={() => handleLogout()}>Logout</a></li>
      </ul>
    </div>
  
  </div>
  <Notification active={activeNotification} />
</div>
  )
}
