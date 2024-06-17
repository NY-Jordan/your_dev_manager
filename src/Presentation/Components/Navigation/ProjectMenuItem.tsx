import Icon from '@mdi/react'
import React, { PropsWithChildren, useEffect, useRef } from 'react'
import { delay, motion } from "framer-motion"
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { mdiLock } from '@mdi/js'
import { GroupTaskStatusEnum } from '../../../Domain/Enums/GroupTaskStatusEnum'

type props = {
    title : string, 
    status : boolean, 
    icon? : string,
    default?: boolean,
    goTo : string,
    isSubMenu? : boolean,
    onClick? : Function,
    type : number
  }

export default function ProjectMenuItem(props : PropsWithChildren<props>) {
  const navigate = useNavigate();
  const location = useLocation();
  const key  = location.key;
  const TaskGroupRef = useRef<HTMLLIElement|null>(null);
  const TaskGroupRightMenuRef = useRef<HTMLDivElement|null>(null);
  

  useEffect(() => {
    const handleRigthClick = (e : MouseEvent) => {
        e.preventDefault();
        if (e.target instanceof HTMLElement && TaskGroupRef.current?.contains(e.target)) {
                TaskGroupRightMenuRef.current?.classList.remove('hidden');
                TaskGroupRightMenuRef.current?.classList.add(`left-[${e.clientX}px]`) ;
                TaskGroupRightMenuRef.current?.classList.add(`top-[${e.clientY}px]`) ;
        } else {
            TaskGroupRightMenuRef.current?.classList.add("hidden")
        }
    }
    const handleCloseContextMenu = (e : MouseEvent) => {
        if (e.target instanceof HTMLElement && !TaskGroupRightMenuRef.current?.contains(e.target)) {
            TaskGroupRightMenuRef.current?.classList.add("hidden");
        }
    }


    TaskGroupRef.current?.addEventListener('contextmenu', (e) => handleRigthClick(e))
    window.addEventListener('click', handleCloseContextMenu)
    return () => {
        console.log('remove');
        window.removeEventListener('contextmenu', handleRigthClick)
        window.removeEventListener('click', handleCloseContextMenu)
    }
  })
    
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
              ref={TaskGroupRef}
              animate={{ width : props.status ? 2 :  "100%",  }} 
              className={ 'hover:bg-gray-200 dark:hover:text-black dark:hover:bg-gray-600  dark:text-white '+(props.status  ? 'rounded-full' : '')} >   
                <a >
                {
                    props.icon && <Icon
                    path={props.icon}
                    size={1}
                    />
                }
                  <div onClick={(e) => console.log(e)}  className='flex' style={{ display : props.status ? "w" : "block"}}>
                    <div className='flex items-center space-x-8'>
                        <p>{props.title}</p>
                        {GroupTaskStatusEnum.private == props.type ? <div  className="tooltip" data-tip="Private">
                            <Icon  path={mdiLock} size={1/2} />
                        </div> : <></>}
                    </div>
                 </div>
                 
                </a>
            </motion.li >
            <div ref={TaskGroupRightMenuRef} className='bg-gray-500 w-40 absolute hidden left-40 top-6 z-50'>
                    Yvanssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                 </div>
          </NavLink>
      
  )
}
