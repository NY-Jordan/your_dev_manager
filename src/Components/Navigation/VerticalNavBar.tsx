import { mdiAccount, mdiArrowLeft, mdiArrowRight, mdiBookAccount, mdiBookArrowUp, mdiBookOpenBlankVariant, mdiBookOpenVariant, mdiCalendarBlankMultiple, mdiCodeTags, mdiLink, mdiPencilPlus } from '@mdi/js'
import Icon from '@mdi/react'
import React, { useState } from 'react'
import { motion } from "framer-motion"
import ToggleVerticalNavBar from './ToggleVerticalNavBar';
import Menu from './MenuItem';
import SubMenu from './SubMenu';

export default function VerticalNavBar() {
  const [widthNavBar, setwidthNavBar] = useState(false);
  return (
    <motion.div animate={{width:  widthNavBar ? "5%" : "16%"  }}  className=' overflow-hidden h-screen  flex flex-col items-center  justify-center p-2 w-64 shadow-2xl  border-r-2 border-gray-400' >
        <ToggleVerticalNavBar  widthNavBar={widthNavBar} setwidthNavBar={setwidthNavBar}  />
        <img  src="https://dcassetcdn.com/design_img/1713797/63770/63770_9324745_1713797_1d1736c0_image.png" width={500}  />
        <div className='ml-2'>
          <Menu title='Dashboard'  icon={mdiAccount}   status={widthNavBar} />
          <Menu title='My Projects'   icon={mdiBookOpenVariant} status={widthNavBar}>
            <SubMenu title='Isiquest'   status={widthNavBar}/>
            <SubMenu title='Social Group'   status={widthNavBar}/>
                       
              
           </Menu>
            
          <Menu title='My Code Review' icon={mdiCodeTags} status={widthNavBar}  />
          
          <Menu title='Notes' status={widthNavBar}  icon={mdiPencilPlus}  />
          <Menu title='Links Bag'  status={widthNavBar}  icon={mdiLink}  />
          <Menu title='Calendar' status={widthNavBar} icon={mdiCalendarBlankMultiple}  />
        </div>
    </motion.div>
  )
}

