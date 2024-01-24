import { mdiAccount } from '@mdi/js'
import Icon from '@mdi/react'
import { PropsWithChildren, ReactElement, ReactNode } from 'react'

type props = {
  title : string, 
  status : boolean, 
  icon? : string
}
export default function Menu(props : PropsWithChildren<props>) {
  return (
    <div tabIndex={0} className={props.status ? "collapse w-15" : "collapse w-full my-2"}>
          <input type="radio"  name='navigation' className="peer" /> 
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
    </div>
  )
}
