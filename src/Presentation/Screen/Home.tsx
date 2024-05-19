import React, { useEffect, useRef } from 'react'
import Auth from '../Components/Auth/Auth'
import NavBar from '../Components/Navigation/NavBar'
import SectionTask from '../Components/SectionTask/SectionTask'
import VerticalNavBar from '../Components/Navigation/VerticalNavBar'
import { task } from '../../data/task'
import Layout from './Layout'
export default function Home() {


  return (
      <div className='flex flex-row  p-4 space-x-8 mt-10 ' style={{ minHeight : "100%", overflowY : "auto" }}> 
        <SectionTask showMoreButton={true} name='Backlog'  data={task.backlog} />
        <SectionTask name='Started' data={task.started} />
        <SectionTask  name='in progress'  data={task.progress} />
        <SectionTask  name='Done' data={task.done}/>
      </div>
  )
}
