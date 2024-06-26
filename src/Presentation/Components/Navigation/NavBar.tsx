import React, { useEffect, useState } from 'react'
import { useResponsive } from '../../../Application/Hooks/useResponsive'
import Icon from '@mdi/react';
import { mdiHamburger, mdiMenu, mdiMenuUp } from '@mdi/js';
import VerticalNavBarContains from './VerticalNavBarContains';
import { logout } from '../../../Application/Helpers/Actions';
import {  useNavigate } from 'react-router-dom';
import Notification from '../Notification/Notification';
import secureLocalStorage from 'react-secure-storage';

export default function NavBar() {
  const {isTabletOrMobile} = useResponsive();
  const navigate = useNavigate();
  const [activeNotification , setActiveNotification]  = useState(false);
  
  const handleLogout = () => {
    logout();
    navigate(0);

  }

  const [darkMode, setDarkMode] = useState(secureLocalStorage.getItem('darkMode') ?? false);

 

  useEffect(() => {
    if (typeof darkMode === 'boolean') {
      document.documentElement.classList.toggle('dark', darkMode);
      secureLocalStorage.setItem('darkMode', darkMode);
    }
  }, [darkMode]);



  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };


  return (
    <div className="navbar   bg-blue-500 dark:bg-slate-800">
      <div className="navbar-start">
        {isTabletOrMobile ?  
        <div className="drawer">
          < input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="btn btn-ghost text-white drawer-button"><Icon path={mdiMenu} size={2} /></label>
          </div> 
          <div className="drawer-side z-50  ">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content dark:bg-slate-800  dark:text-white">
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
    <label className="swap swap-rotate">
      
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" onChange={() => toggleDarkMode()} className="theme-controller" value="synthwave" />
      
      {/* sun icon */}
      <svg className="swap-off fill-current w-6 h-6 dark:text-white"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
      
      {/* moon icon */}
      <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
      
    </label>
    

    <div className="dropdown dropdown-end">
      <button onClick={() => setActiveNotification(!activeNotification)} className={"btn btn-ghost  btn-circle "+(activeNotification ? 'bg-slate-600/[.3]' : '')}>
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
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
