import React, { useEffect, useRef } from 'react'
import Auth from './../Components/Auth/Auth'
import VerticalNavBar from '../Components/Navigation/VerticalNavBar'
export default function Home() {

  useEffect(() => {
    // document.getElementById('my_modal_1').showModal();
  }, []) 

  return (
    <div className='h-full'>
      
      <Auth />
      <VerticalNavBar />
    </div>
  )
}
