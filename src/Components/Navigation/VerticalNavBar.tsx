import { mdiAccount, mdiArrowLeft, mdiArrowRight, mdiBookAccount, mdiBookArrowUp, mdiBookOpenBlankVariant, mdiBookOpenVariant, mdiCalendarBlankMultiple, mdiCodeTags, mdiContacts, mdiHelp, mdiLink, mdiPencilPlus, mdiPlus } from '@mdi/js'
import Icon from '@mdi/react'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { motion } from "framer-motion"
import ToggleVerticalNavBar from './ToggleVerticalNavBar';
import SubMenu from './SubMenu';
import DropDownMenuItem from './DropDownMenuItem';
import MenuItem from './MenuItem';
type props  = {
  widthNavBar : boolean,
  setwidthNavBar  : Dispatch<SetStateAction<boolean>>,
}

export default function VerticalNavBar({widthNavBar,setwidthNavBar} : props) {
 
  return (
    <motion.div   animate={{width:  widthNavBar ? "5%" : "16%"  }}  className='px-2 h-screen bg-white flex flex-col items-left pt-20 overflow-y-auto no-scrollbar p-2 w-64 shadow-2xl  border-r-2 border-gray-400' >
        <ToggleVerticalNavBar  widthNavBar={widthNavBar} setwidthNavBar={setwidthNavBar}  /> 
          <ul className="menu px-0 rounded-box">
          <MenuItem title='Dashboard' goTo='/' icon={mdiAccount}   status={widthNavBar} default={true} />
          <DropDownMenuItem title='My Projects'   icon={mdiBookOpenVariant}  status={widthNavBar}>
            <SubMenu title='Isiquest'   status={widthNavBar}>
              <MenuItem title='Add group task'  goTo='/projects'  icon={mdiPlus}   status={false}  />
            </SubMenu>
            <SubMenu title='Social Group'   status={widthNavBar}  >
              <MenuItem   goTo='/projects' title='Add group task'  icon={mdiPlus}   status={false} />
            </SubMenu> 
           </DropDownMenuItem>
            
          <MenuItem  goTo='/dodereview' title='My Code Review'  icon={mdiCodeTags} status={widthNavBar}  />
          
          <MenuItem  goTo='/notes' title='Notes' status={widthNavBar}  icon={mdiPencilPlus}  />
          <MenuItem   goTo='/linksbag' title='Links Bag'  status={widthNavBar}  icon={mdiLink}  />
          <MenuItem  goTo='/calendar' title='Calendar' status={widthNavBar} icon={mdiCalendarBlankMultiple}  />
          <div className="menu pt-40 rounded-box">
            <MenuItem  goTo='/' title='Help' status={widthNavBar}  icon={mdiHelp}  />
            <MenuItem   goTo='/' title='join us'  status={widthNavBar}  icon={mdiContacts}  />
          </div>
          </ul>
          
    </motion.div>
  )
}

