import { mdiAccount } from '@mdi/js'
import Icon from '@mdi/react'
import { PropsWithChildren, ReactElement, ReactNode } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

type props = {
  title : string, 
  status : boolean, 
  icon? : string,
  default?: boolean,
  goTo? : string
}
export default function DropDownMenuItem(props : PropsWithChildren<props>) {
  const navigate = useNavigate();
  const location = useLocation();
  const key  = location.key;
  function handleClick() {
     if (props.goTo != location.pathname && props.goTo?.length ) {
      navigate(props.goTo);
     }
    
  }

  
  return (
      <li className={props.status ? 'dropdown dropdown-right' : ""}>
        <details >
          <summary tabIndex={0}  className={'hover:bg-gray-200 dark:hover:text-black dark:hover:bg-gray-600 dark:text-white '+(props.status ? 'p-2' : '')}>
          {
              props.icon && <Icon
              path={props.icon}
              size={1}
               />
            }
          <p className='dark:text-white' style={{ display : props.status ? "none" : "block"}}>{props.title}</p>
          </summary>
          <ul tabIndex={0} className={props.status ? "dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52": ""}>
          {props.children}
           
          </ul>
      </details>
    </li>
    
  )
}
