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
    <motion.div  className='h-full flex flex-row  bg-slate-100' style={{ overflowX : "hidden", overflowY : 'hidden' }}>
      <Auth />
     {isDesktopOrLaptop && <VerticalNavBar   widthNavBar={widthNavBar} setwidthNavBar={setwidthNavBar} />}
      <motion.div  animate={{ width : isDesktopOrLaptop ?  ( widthNavBar ? "95%" :  '86%')  : "100%"}}  transition={{ delay: 0.01 }} >
        <NavBar  />
        <div style={{ overflow  : "auto" }}>
             <Outlet />
        </div>
        <div className='relative   text-gray-400' style={{  left : "40%" }}>
          created by Yvan Jordan Nguetse @ 2024-2025
        </div>
      </motion.div>
    </motion.div>
  )
}
