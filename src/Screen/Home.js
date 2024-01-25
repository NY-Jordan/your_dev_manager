import React, { useEffect, useRef } from 'react'
import Auth from './../Components/Auth/Auth'
import NavBar from '../Components/Navigation/NavBar'
import SectionTask from '../Components/SectionTask/SectionTask'
import VerticalNavBar from '../Components/Navigation/VerticalNavBar'
export default function Home() {

  useEffect(() => {
    // document.getElementById('my_modal_1').showModal();
  }, []) 

  return (
    <div className='h-full flex xflex-row'>
      
      <Auth />
    
      <VerticalNavBar  />
      <div style={{ width : "100%" }}>
      <NavBar />
      <div className='flex flex-row p-4 space-x-8 mt-10'> 
        <SectionTask showMoreButton={true} name='Backlog' />
        <SectionTask name='Started' />
        <SectionTask  name='in progress'  />
        <SectionTask  name='Done'/>
      </div>
      </div>
    </div>
  )
}
