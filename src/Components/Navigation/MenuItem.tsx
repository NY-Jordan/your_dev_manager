import Icon from '@mdi/react'
import React, { PropsWithChildren } from 'react'
import { motion } from "framer-motion"
import { useLocation, useNavigate } from 'react-router-dom'

type props = {
    title : string, 
    status : boolean, 
    icon? : string,
    default?: boolean,
    goTo : string
  }

export default function MenuItem(props : PropsWithChildren<props>) {
  const navigate = useNavigate();
  const location = useLocation();
  const key  = location.key;
  function handleClick() {
     if (props.goTo != location.pathname) {
      navigate(props.goTo);
     }
    
  }

  return (
      <motion.li  animate={{ width : props.status ? 2 :  "100%"  }} className={ 'hover:bg-gray-200 '+(props.status  ? 'rounded-full' : '')} >   
        <a onClick={handleClick}>
        {
            props.icon && <Icon
            path={props.icon}
            size={1}
            />
        }
        <p style={{ display : props.status ? "none" : "block"}}>{props.title}</p></a>
        </motion.li >
  )
}
