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
          <summary  className='hover:bg-gray-200'>
          {
              props.icon && <Icon
              path={props.icon}
              size={1}
               />
            }
            {props.title}
          </summary>
          <ul>
          {props.children}
           
          </ul>
      </details>
    </li>
    
  )
}
