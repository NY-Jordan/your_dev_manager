import React, { useState } from 'react'
import Layout from './Layout'
import Card from '../Components/Dashboard/Card'
import Range from '../Components/Range';
import TableProjects from '../Components/TableProjects';
import Collaborators from '../Components/Collaborators';
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';
import { useResponsive } from '../../Application/Hooks/useResponsive';
import CreateProjectModal from '../Components/Modals/CreateProjectModal';




export default function Dashboard() {
  const {isTabletOrMobile, isSM} = useResponsive();
  const [activeCreateProjectModal, setActiveCreateProjectModal] = useState<boolean>(false);
  return (
      
      <div className='px-10' >
          <div className={'flex justify-between mt-4 mb-2 ' + (isTabletOrMobile ? 'flex-col space-y-4' : '' )}>
              <div>
                <h1 className='text-2xl'>Dasboard</h1>
                <div  style={{ backgroundColor : "blue", width : "70%", padding : "1px" }}></div>
              </div>
              <button className="btn btn-primary"  onClick={() => setActiveCreateProjectModal(!activeCreateProjectModal)}><Icon path={mdiPlus}  size={1} />New Project</button>
              <CreateProjectModal  setActive={setActiveCreateProjectModal} active={activeCreateProjectModal} />
          </div>
          <div className={'mt-2 ' + (isSM ? "grid mb-6 grid-cols-2 gap-6 " : "grid mb-6 grid-cols-4 gap-6 ")} style={{ width : '100%',  }}>
            <Card title='Projects' color='blue' percent='04' />
            <Card title='Code Reviews' color='red' percent='10' />
            <Card  title='Notes' color='orange' percent='40'/>
            <Card title='links' color='green' percent='60' />
          </div>
          <div className='rounded-lg flex flex-col px-10 bg-white justify-center mb-10 ' >
              <div className='mb-4 items-center  mt-2 justify-between flex space-x-6'>
                  <h3 className='text-2xl font-bold '>My Projects</h3>
                  <div className='border-2 border-gray-300 p-1 text-md rounded-md'>03</div>
              </div>
            <TableProjects />
          </div>
          <div className={'flex items-center space-x-4 justify-center content-center'+(isTabletOrMobile ? 'flex-col space-y-8' : "")}>
            <div className=' border-2 p-2 rounded-lg bg-white' style={{ width : isTabletOrMobile ? "100%" : "50%" }}>
                <div className='mb-4 items-center  justify-between flex space-x-6'>
                  <h3 className='text-2xl font-bold '>Collaborators</h3>
                  <div className='border-2 border-gray-300 p-1 text-md rounded-md'>03</div>
                </div>
                <Collaborators />
            </div>
            <div style={{ width : isTabletOrMobile ? "100%" : "50%" }} className='rounded-lg bg-white border-2 p-2'>
              <div className='mb-4'>
                <h3 className='text-2xl  font-bold mb-4'>Statistics</h3>
              </div>
              <div className='ml-6'>
                <Range value={25} title='speed of delivery a project' />
                <Range value={80} title='speed of delivery a group task' />
                <Range value={40} title='speed of delivery a simple task' />
              </div>
            </div>
            
          </div>
      </div>
      
  )
}
