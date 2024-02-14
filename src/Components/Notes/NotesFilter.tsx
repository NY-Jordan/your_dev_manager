import React from 'react'
import ColorPoint from '../ColorPoint'
import { colors } from '../../data/color'
import CardColor from '../CardColor'
import CardNote from '../CardNote'

export default function NotesFilter() {
  return (
    <div className='p-2 border-l-2 h-full border-gray-400 shadow-2xl' style={{ width : "100%"}}>
      <div className='mt-10 flex flex-col space-y-6' >
       <div className='shadow-lg rounded-lg bg-blueGray-100 p-2'>
          <div >
            <div className='my-2'>Start Date</div>
            <input type='date' className='input  bg-gray-300 w-full' />
          </div>
          <div>
            <div className='my-2'>End Date</div>
            <input type='date' className='input  bg-gray-300 w-full' />
          </div>
       </div>
        <div className='shadow-lg rounded-lg bg-blueGray-100 p-2'>
          <div className='my-2'>Color Filter</div>
              {
                  colors.map((color, key) => <ColorPoint  key={key} colors={color} />)
              }
        </div>    
        <div>
        <div className='w-full shadow-lg rounded-lg bg-blueGray-100 p-2'>
          <div className='my-2'>Filter by projects</div>
            <select className="select select-sm w-full select-bordered  ">
              <option disabled selected>Choose a project</option>
              <option >Isiquest</option>
              <option>Dev Manager</option>
            </select>
          </div>
          <div className='w-full'>
            <div className='my-2'>Filter by task</div>
              <select className="select select-sm w-full select-bordered  ">
                <option disabled selected>Choose a task</option>
                <option >Authentification</option>
                <option>user crud</option>
              </select>
          </div>
        </div>
      </div>
    </div>
  )
}
