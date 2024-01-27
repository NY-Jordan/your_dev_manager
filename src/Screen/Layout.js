import React, { useEffect, useRef, useState } from 'react'
import Auth from '../Components/Auth/Auth'
import NavBar from '../Components/Navigation/NavBar'
import SectionTask from '../Components/SectionTask/SectionTask'
import VerticalNavBar from '../Components/Navigation/VerticalNavBar'
import { task } from '../data/task'
import { motion } from "framer-motion"

export default function Layout({children}) {

  useEffect(() => {
    //document.getElementById('my_modal_1').showModal();
  }, []) 
  const [widthNavBar, setwidthNavBar] = useState(false);
  return (
    <motion.div  className='h-full flex flex-row  bg-slate-100'>
      <Auth />
      <VerticalNavBar   widthNavBar={widthNavBar} setwidthNavBar={setwidthNavBar} />
      <motion.div style={{  width : "86%" }} animate={{ width : widthNavBar ? "95%" :  '86%'}}  transition={{ delay: 0.01 }} >
      <NavBar  />
     
        {children}
      </motion.div>
    </motion.div>
  )
}
