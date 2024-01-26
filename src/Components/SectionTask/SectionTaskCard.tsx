import { Reorder, delay } from 'framer-motion'
import React, { useState } from 'react'
import { motion } from "framer-motion"

export default function SectionTaskCard({item, position} :  {item : string, position : number}) {
    const top = (position * 50);
    const [showViewMoreButton, setShowViewMoreButton] = useState(false);
    const animation = {
        height: "100%",
        scale : 1,
        bottom : top +20,
        cursor : "pointer",
        transition: { duration: 0.5},
    }

     
  return (
    <Reorder.Item value={item} id={item} >
        <motion.div  
             onMouseEnter={() => setShowViewMoreButton(true)}
             onMouseLeave={() => setShowViewMoreButton(false)}
             whileHover={animation }
            className={"card my-2  h-40 border-2 bg-base-100 shadow-xl "} style={{ bottom  : top }}>
            <div className='card-title  m-0 p-0 justify-end'>
                <span className="bg-primary mr-4 rounded-sm mt-2 p-2"></span>
            </div>
            <div className="card-body">
                <h2 className="card-title">Task title</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className={"btn  btn-primary "+(showViewMoreButton ? '' : 'invisible')}>View More</button>
                </div>
            </div>       
        </motion.div>
    </Reorder.Item>
    
  )
}
