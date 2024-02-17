import { mdiMagnify } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'

export default function CodeReviewFilter() {
  return (
    <div className='flex flex-row justify-between   items-center'>
      <div className='flex flex-row items-center '>
        <input type="text" placeholder="Search..." className="input   input-sm input-bordered w-full max-w-xs" />
        <a href='#' className='bg-white p-1 relative right-8 '>
            <Icon path={mdiMagnify}  size={4/5}/>
        </a> 
      </div>
      <div className='flex flex-row space-x-2'>

        <select className="select select-sm w-100 select-bordered  ">
            <option disabled selected>Choose a language</option>
            <option >Javascript</option>
            <option>Java</option>
            <option>PHP</option>
            <option>Css</option>
        </select>
        <select className="select select-sm select-bordered w-full max-w-xs">
            <option selected>most liked</option>
            <option>least liked</option>
        </select>
      </div>
    </div>
  )
}
