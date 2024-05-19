import React, { useEffect, useRef } from 'react'
import Auth from '../Components/Auth/Auth'
import NavBar from '../Components/Navigation/NavBar'
import SectionTask from '../Components/SectionTask/SectionTask'
import AddTask from '../Components/SectionTask/AddTask'
import VerticalNavBar from '../Components/Navigation/VerticalNavBar'
import { task } from '../../data/task'
import Layout from './Layout'
import Icon from '@mdi/react'
import { mdiMagnify } from '@mdi/js'
import { useResponsive } from '../../Application/Hooks/useResponsive'


export default function Projects() {
  const {isTabletOrMobile, isSM} = useResponsive();
  return (
    <div className='pt-4 px-4'>
          <div className={'flex justify-between  mb-6'}>
              <div>
                <h1 className='text-2xl'>Authentification</h1>
                <div  style={{ backgroundColor : "blue", width : "70%", padding : "1px" }}></div>
              </div>
            
          </div>
          <div className='flex flex-row justify-end  mb-4 items-center'>
            <div className='flex flex-row items-center '>
              <input type="text" placeholder="Search..." className="input   input-sm input-bordered w-full max-w-xs" />
              <a href='#' className='bg-white p-1 relative right-8 '>
                  <Icon path={mdiMagnify}  size={4/5}/>
              </a> 
            </div>
            <div className='flex flex-row space-x-2'>
              <input type="date" placeholder="Search..." className="input   input-sm input-bordered w-full max-w-xs" />
            </div>
          </div>
          <div className={'flex   overflow-y-auto   space-x-8  '+(isSM ? 'flex-col' : 'flex-row')} > 
                <SectionTask showMoreButton={true} name='Backlog'  data={task.backlog} />
                <SectionTask name='Started' data={task.started} />
                <SectionTask  name='in progress'  data={task.progress} />
                <SectionTask  name='Done' data={task.done}/>
          <AddTask />
        </div>
    </div>
       
    
  )
}
