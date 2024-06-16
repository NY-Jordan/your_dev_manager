import { mdiAccount, mdiArrowLeft, mdiArrowRight, mdiBookAccount, mdiBookArrowUp, mdiBookOpenBlankVariant, mdiBookOpenVariant, mdiCalendarBlankMultiple, mdiCodeTags, mdiContacts, mdiHandPointingRight, mdiHelp, mdiLink, mdiPencilPlus, mdiPlus } from '@mdi/js'
import Icon from '@mdi/react'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { motion } from "framer-motion"
import ToggleVerticalNavBar from './ToggleVerticalNavBar';
import SubMenu from './SubMenu';
import DropDownMenuItem from './DropDownMenuItem';
import MenuItem from './MenuItem';
import VerticalNavBarContains from './VerticalNavBarContains';
type props  = {
  widthNavBar : boolean,
  setwidthNavBar  : Dispatch<SetStateAction<boolean>>,
}

export default function VerticalNavBar({widthNavBar,setwidthNavBar} : props) {
 
  return (
    <motion.div   animate={{width:  widthNavBar ? "5%" : "16%"  }}  className='px-2 h-screen dark:bg-slate-800 bg-white flex flex-col items-left pt-20 overflow-y-auto no-scrollbar p-2 w-64 shadow-2xl  border-r-2 dark:border-r-black  border-gray-400' >
        <ToggleVerticalNavBar  widthNavBar={widthNavBar} setwidthNavBar={setwidthNavBar}  /> 
          <VerticalNavBarContains widthNavBar={widthNavBar} />
    </motion.div>
  )
}

