import { mdiArrowLeft, mdiArrowRight } from '@mdi/js'
import Icon from '@mdi/react'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { motion } from "framer-motion"

type props  = {
    widthNavBar : boolean,
    setwidthNavBar  : Dispatch<SetStateAction<boolean>>,
}

export default function ToggleVerticalNavBar({widthNavBar, setwidthNavBar} : props) {
  return (
    <motion.div className='flex flex-row items-center  bg-slate-50  absolute left-60'  style={{ top : "4%" }} animate={{left:  widthNavBar ? "3%" : "14%"  }}>
            <a href='#' onClick={() => setwidthNavBar(!widthNavBar)}  className='border-2 mr-4	border-inherit	p-2 shadow-xl rounded-lg'>
               {
                widthNavBar ?
                <Icon 
               path={mdiArrowLeft}
               title="back space"
               size={1}
               horizontal
               vertical
               color="gray"
               
               /> :
               <Icon 
               path={mdiArrowRight}
               title="back space"
               size={1}
               horizontal
               vertical
               color="gray"
               
               />
               }

            </a>            
        </motion.div>
  )
}
