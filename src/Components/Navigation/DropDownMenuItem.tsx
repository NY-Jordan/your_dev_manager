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
          <summary tabIndex={0}  className={'hover:bg-gray-200 '+(props.status ? 'p-2' : '')}>
          {
              props.icon && <Icon
              path={props.icon}
              size={1}
               />
            }
          <p style={{ display : props.status ? "none" : "block"}}>{props.title}</p>
          </summary>
          <ul tabIndex={0} className={props.status ? "dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52": ""}>
          {props.children}
           
          </ul>
      </details>
    </li>
    
  )
}
{/* <div tabIndex={0}  className={props.status ? "collapse w-15" : "collapse w-full my-2"}>
          <input type="radio" onClick={handleClick}  checked={props.default == true ? true : undefined} name='navigation' className="peer" /> 
          <div  style={{ padding :  props.status ? "0px" : "" }} className="collapse-title p-0  peer-hover:bg-gray-200 flex items-center justify-left   text-gray-content peer-checked:text-blue-500 ">
            {
              props.icon && <Icon
              path={props.icon}
              size={3/2}
               />
            }
             <p style={{ display : props.status ? "none" : "block", marginLeft : "8px"}}> {props.title}</p>
          </div>
          {
            props.children && <div className="collapse-content ml-5 text-gray-content "> 
            {props.children}
          </div>
          }
    </div> */}