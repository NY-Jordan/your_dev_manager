import React, { useEffect, useRef } from 'react'
import Auth from './../Components/Auth/Auth'
import NavBar from '../Components/Navigation/NavBar'
import VerticalNavBar from '../Components/Navigation/VerticalNavBar'
export default function Home() {

  useEffect(() => {
    // document.getElementById('my_modal_1').showModal();
  }, []) 

  return (
    <div className='h-full flex xflex-row'>
      
      <Auth />
    
      <VerticalNavBar />
      <div style={{ width : "100%" }}>
        
      </div>
    </div>
  )
}
