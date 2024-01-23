import { mdiArrowLeft, mdiArrowRight } from '@mdi/js'
import Icon from '@mdi/react'
import React, { useState } from 'react'
import { motion } from "framer-motion"
import ToggleVerticalNavBar from './ToggleVerticalNavBar';

export default function VerticalNavBar() {
  const [widthNavBar, setwidthNavBar] = useState(false);
  return (
    <motion.div animate={{width:  widthNavBar ? "4%" : "16%"  }}  className='h-screen p-2 w-64 shadow-2xl  border-r-2 border-gray-400' >
        <ToggleVerticalNavBar  widthNavBar={widthNavBar} setwidthNavBar={setwidthNavBar}  />
        
    </motion.div>
  )
}
