import { mdiDotsVertical, mdiMore, mdiPlus, mdiStarThreePoints } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'
type props = {
    showMoreButton? : boolean,
    name: string
}
export default function SectionTaskHeader({showMoreButton, name}  : props) {
  return (
    <div>
      <div className='flex flex-row justify-between' >
        <div className='flex flex-col'>
            <h5>{name}</h5>
            <div className=' text-sm text-gray-500'>1 task</div>
        </div>
        <div className='flex flex-row  items-center space-x-2'>
            {
                showMoreButton &&
                <button className="btn bg-blue-500 btn-square hover:bg-blue-400 rounded-full	"> 
                <Icon 
                path={mdiPlus}
                color={"white"}
                size={3/2}
                />
                 </button>
            }
             <a href='#' className='hover:bg-gray-200 rounded'>
             <Icon 
            path={mdiDotsVertical}
            size={3/3}
            />
             </a>
        </div>
      </div>
    </div>
  )
}
