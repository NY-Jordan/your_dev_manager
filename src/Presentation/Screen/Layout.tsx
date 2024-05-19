import React, { useEffect, useRef, useState } from 'react'
import Auth from '../Components/Auth/Auth'
import NavBar from '../Components/Navigation/NavBar'
import SectionTask from '../Components/SectionTask/SectionTask'
import VerticalNavBar from '../Components/Navigation/VerticalNavBar'
import { task } from '../../data/task'
import { motion } from "framer-motion"
import { useResponsive } from '../../Application/Hooks/useResponsive'
import { Outlet } from "react-router-dom";
import secureLocalStorage from 'react-secure-storage'
import  useCookie,  { getCookie } from 'react-use-cookie'
import toast, { Toaster } from 'react-hot-toast'
import { notification } from '../../echo'
import CustomToaster from '../Components/Toaster/CustomToaster'


export default function Layout() {
  const {isDesktopOrLaptop } = useResponsive();
  

  useEffect(() => {
    /* notification(); */
  })

  
  const [widthNavBar, setwidthNavBar] = useState(false);
  return (
    <motion.div  className='flex flex-row  bg-slate-100' style={{ overflowX : "hidden", overflowY : 'hidden' }}>
      <Auth />
     {isDesktopOrLaptop && <VerticalNavBar   widthNavBar={widthNavBar} setwidthNavBar={setwidthNavBar} />}
      <motion.div  animate={{ width : isDesktopOrLaptop ?  ( widthNavBar ? "95%" :  '86%')  : "100%"}}  transition={{ delay: 0.01 }} >
        <NavBar  />
        <div className='h-screen flex-1' style={{ overflowY  : "auto", overflowX : 'hidden' }}>
             <Outlet />
        </div>
        <CustomToaster />
      </motion.div>
    </motion.div>
  )
}
