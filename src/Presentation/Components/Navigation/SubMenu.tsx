import { mdiAccount } from '@mdi/js'
import Icon from '@mdi/react'
import { PropsWithChildren, ReactElement, ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

type props = {
  title : string, 
  status : boolean, 
  icon? : string,
  goTo? : string
}
export default function SubMenu(props : PropsWithChildren<props>) {
  const navigate = useNavigate();
  const location = useLocation();
  function handleClick() {
     if (props.goTo != location.pathname && props.goTo?.length ) {
      navigate(props.goTo);
     }
    
  }
  return (
    <li>
        <details >
          <summary  className='hover:bg-gray-200  dark:hover:bg-gray-600 dark:text-white '>
          {
              props.icon && <Icon
              path={props.icon}
              size={1}
               />
            }
            <span className='dark:text-white dark:hover:text-black'>{props.title}</span>
          </summary>
          <ul className=''>
          {props.children}
           
          </ul>
      </details>
    </li>
    
  )
}
