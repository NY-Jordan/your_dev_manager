import { mdiAccount, mdiArrowLeft, mdiArrowRight, mdiBookAccount, mdiBookArrowUp, mdiBookOpenBlankVariant, mdiBookOpenVariant, mdiCalendarBlankMultiple, mdiCodeTags, mdiLink, mdiPencilPlus, mdiPlus } from '@mdi/js'
import Icon from '@mdi/react'
import React, { useState } from 'react'
import { motion } from "framer-motion"
import ToggleVerticalNavBar from './ToggleVerticalNavBar';
import Menu from './MenuItem';
import SubMenu from './SubMenu';

export default function VerticalNavBar() {
  const [widthNavBar, setwidthNavBar] = useState(false);
  return (
    <motion.div   animate={{width:  widthNavBar ? "5%" : "16%"  }}  className=' h-screen flex flex-col items-center mt-40  p-2 w-64 shadow-2xl  border-r-2 border-gray-400' >
        <ToggleVerticalNavBar  widthNavBar={widthNavBar} setwidthNavBar={setwidthNavBar}  />
        <div className='ml-2'>
          <Menu title='Dashboard'  icon={mdiAccount}   status={widthNavBar} default={true} />
          <Menu title='My Projects'   icon={mdiBookOpenVariant}  status={widthNavBar}>
            <SubMenu title='Isiquest'   status={widthNavBar}>
              <div className='flex flex-row items-center hover:bg-gray-100'>
                  <Icon  path={mdiPlus} size={1} />
                  <a href='#'>Add group task</a>
                </div>
            </SubMenu>
            <SubMenu title='Social Group'   status={widthNavBar}  >
                <div className='flex flex-row items-center hover:bg-gray-100'>
                  <Icon  path={mdiPlus} size={1} />
                  <a href='#'>Add group task</a>
                </div>
            </SubMenu> 
           </Menu>
            
          <Menu title='My Code Review'  icon={mdiCodeTags} status={widthNavBar}  />
          
          <Menu title='Notes' status={widthNavBar}  icon={mdiPencilPlus}  />
          <Menu title='Links Bag'  status={widthNavBar}  icon={mdiLink}  />
          <Menu title='Calendar' status={widthNavBar} icon={mdiCalendarBlankMultiple}  />
        </div>
    </motion.div>
  )
}

