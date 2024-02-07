import { Reorder, delay } from 'framer-motion'
import React, { useState } from 'react'
import { motion } from "framer-motion"
import Icon from '@mdi/react';
import { mdiBookEdit, mdiChevronLeft, mdiChevronRight, mdiDelete, mdiDotsVertical, mdiTagEdit } from '@mdi/js';

export default function Card({title, percent, color} : {title : string, percent : string, color : string})  {

    const [showViewMoreButton, setShowViewMoreButton] = useState(false);
    const animation = {
        height: "100%",
        scale : 1,
        cursor : "pointer",
        transition: { duration: 0.5},
    }

     
  return (
   
        <div className={"card my-2 h-30  rounded-none bg-base-100 shadow-xl "} >
            <div className="card-body">
                <h2 className="text-md font-bold">{title}</h2>
                <div className='flex flex-row items-center w-full'>
                    <p className='text-3xl font-bold'>{percent}</p>
                </div>
                
            </div>     
            <div className=' w-full bg-red-400' style={{ backgroundColor : color, padding : "2px" }}></div>
        </div>
   
    
  )
}
