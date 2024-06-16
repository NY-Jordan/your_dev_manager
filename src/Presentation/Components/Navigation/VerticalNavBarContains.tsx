import React from 'react'
import DropDownMenuItem from './DropDownMenuItem'
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'
import { mdiAccount, mdiBookOpenVariant, mdiCalendarBlankMultiple, mdiCodeTags, mdiContacts, mdiHandPointingRight, mdiHelp, mdiLink, mdiPencilPlus, mdiPlus } from '@mdi/js'
import logo from './../../assets/img/logo.png'
import { useAppSelector } from '../../../Application/Store/hook'
import { ProjectInterface } from '../../../Domain/Entities/project.entities'
import ProjectsMenu from './ProjectsMenu'
export default function VerticalNavBarContains({widthNavBar} : {widthNavBar? : boolean}) {
    const withVerticalNav = widthNavBar ? widthNavBar : false;
    const projects = useAppSelector(state => state.projects).projects


    
  return (
    <ul className="menu px-0 rounded-box dark:bg-slate-800 dark:border-gray-800">
            
          <MenuItem title='Dashboard' goTo='/' icon={mdiAccount}   status={withVerticalNav} default={true} />
          <DropDownMenuItem title='My Projects'   icon={mdiBookOpenVariant}  status={withVerticalNav}>
           
            {projects && projects.map((project : ProjectInterface,key : number) => {
            return  <ProjectsMenu  key={key} title={project.name}  project={project}   status={false}/>}) }

{/* <SubMenu key={key} title={project.name}   status={withVerticalNav}>
            </SubMenu> */}
           
           </DropDownMenuItem>
            
          <MenuItem  goTo='/codereview' title='My Code Review'  icon={mdiCodeTags} status={withVerticalNav}  />
          
          <MenuItem  goTo='/notes' title='Notes' status={withVerticalNav}  icon={mdiPencilPlus}  />
          <MenuItem   goTo='/linksbag' title='Links Bag'  status={withVerticalNav}  icon={mdiLink}  />
          <MenuItem  goTo='/calendar' title='Calendar' status={withVerticalNav} icon={mdiCalendarBlankMultiple}  />
          <div className="menu pt-40 rounded-box">
            <MenuItem  goTo='/help' title='Help' status={withVerticalNav}  icon={mdiHelp}  />
            <MenuItem   goTo='/joinus' title='join us'  status={withVerticalNav}  icon={mdiContacts}  />
          </div>
          </ul>
  )
}
