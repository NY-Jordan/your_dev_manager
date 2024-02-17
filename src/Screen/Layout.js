import React, { useEffect, useRef, useState } from 'react'
import Auth from '../Components/Auth/Auth'
import NavBar from '../Components/Navigation/NavBar'
import SectionTask from '../Components/SectionTask/SectionTask'
import VerticalNavBar from '../Components/Navigation/VerticalNavBar'
import { task } from '../data/task'
import { motion } from "framer-motion"
import { useResponsive } from '../Hooks/useResponsive'
import { Outlet } from "react-router-dom";

export default function Layout() {
  const {isDesktopOrLaptop } = useResponsive();
  useEffect(() => {
    //document.getElementById('my_modal_1').showModal();
  }, []) 
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
      </motion.div>
    </motion.div>
  )
}
