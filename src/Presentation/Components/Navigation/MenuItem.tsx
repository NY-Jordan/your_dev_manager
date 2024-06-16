import Icon from '@mdi/react'
import React, { PropsWithChildren } from 'react'
import { delay, motion } from "framer-motion"
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

type props = {
    title : string, 
    status : boolean, 
    icon? : string,
    default?: boolean,
    goTo : string,
    isSubMenu? : boolean,
    onClick? : Function
  }

export default function MenuItem(props : PropsWithChildren<props>) {
  const navigate = useNavigate();
  const location = useLocation();
  const key  = location.key;
  

  return (
    <NavLink
        to={props.goTo}
        onClick={() => props.onClick ? props.onClick() : () => {}}
        className={({ isActive, isPending }) =>
          isActive
            ? "bg-blue-200 dark:text-black dark:bg-gray-600"
            : isPending
            ? "pending"
            : ""
        } >
            <motion.li 
              whileHover={{ 
                transform  :  props.isSubMenu ? 'translate(20px)' :  'translate(0)'
              }}
              animate={{ width : props.status ? 2 :  "100%",  }} 
              className={ 'hover:bg-gray-200 dark:hover:text-black dark:hover:bg-gray-600  dark:text-white '+(props.status  ? 'rounded-full' : '')} >   
                <a >
                {
                    props.icon && <Icon
                    path={props.icon}
                    size={1}
                    />
                }
                  <p style={{ display : props.status ? "none" : "block",  overflow : 'hidden'}}>{props.title}</p>
                </a>
            </motion.li >
          </NavLink>
      
  )
}
