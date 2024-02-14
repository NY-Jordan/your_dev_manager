import React from 'react'
import DropDownMenuItem from './DropDownMenuItem'
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'
import { mdiAccount, mdiBookOpenVariant, mdiCalendarBlankMultiple, mdiCodeTags, mdiContacts, mdiHandPointingRight, mdiHelp, mdiLink, mdiPencilPlus, mdiPlus } from '@mdi/js'

export default function VerticalNavBarContains({widthNavBar} : {widthNavBar? : boolean}) {
    const withVerticalNav = widthNavBar ? widthNavBar : false;
  return (
    <ul className="menu px-0 rounded-box">
          <MenuItem title='Dashboard' goTo='/' icon={mdiAccount}   status={withVerticalNav} default={true} />
          <DropDownMenuItem title='My Projects'   icon={mdiBookOpenVariant}  status={withVerticalNav}>
            <SubMenu title='Isiquest'   status={withVerticalNav}>
                <MenuItem title='Add group task'  goTo='/projects'  icon={mdiPlus}   status={false}  />
                <MenuItem title='Authentification'  icon={mdiHandPointingRight}   goTo='/projects'   status={false}   isSubMenu={true}  />
                <MenuItem title='gestion des utilisateurs'   icon={mdiHandPointingRight}  goTo='/projects'   status={false}  isSubMenu={true} />
            </SubMenu>
            <SubMenu title='Social Group'   status={withVerticalNav}  >
              <MenuItem   goTo='/projects' title='Add group task'  icon={mdiPlus}   status={false} />
            </SubMenu> 
           </DropDownMenuItem>
            
          <MenuItem  goTo='/codereview' title='My Code Review'  icon={mdiCodeTags} status={withVerticalNav}  />
          
          <MenuItem  goTo='/notes' title='Notes' status={withVerticalNav}  icon={mdiPencilPlus}  />
          <MenuItem   goTo='/linksbag' title='Links Bag'  status={withVerticalNav}  icon={mdiLink}  />
          <MenuItem  goTo='/calendar' title='Calendar' status={withVerticalNav} icon={mdiCalendarBlankMultiple}  />
          <div className="menu pt-40 rounded-box">
            <MenuItem  goTo='/' title='Help' status={withVerticalNav}  icon={mdiHelp}  />
            <MenuItem   goTo='/' title='join us'  status={withVerticalNav}  icon={mdiContacts}  />
          </div>
          </ul>
  )
}
