import { mdiArrowLeft, mdiArrowRight } from '@mdi/js'
import Icon from '@mdi/react'
import React, { useState } from 'react'
import { motion } from "framer-motion"
import ToggleVerticalNavBar from './ToggleVerticalNavBar';
import Menu from './MenuItem';

export default function VerticalNavBar() {
  const [widthNavBar, setwidthNavBar] = useState(false);
  return (
    <motion.div animate={{width:  widthNavBar ? "4%" : "16%"  }}  className='h-screen  flex flex-col items-center  justify-center p-2 w-64 shadow-2xl  border-r-2 border-gray-400' >
        <ToggleVerticalNavBar  widthNavBar={widthNavBar} setwidthNavBar={setwidthNavBar}  />
        <div className='ml-2'>
          <Menu title='Dashboard' status={widthNavBar} />
          <Menu title='My Projects'  status={widthNavBar} />
          <Menu title='My Code Review' status={widthNavBar}  />
          <Menu title='Notes' status={widthNavBar}  />
          <Menu title='Links Bag'  status={widthNavBar}  />
          <Menu title='Calendar' status={widthNavBar}  />
        </div>
    </motion.div>
  )
}
