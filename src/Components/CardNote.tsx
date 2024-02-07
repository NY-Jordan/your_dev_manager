import { mdiDelete, mdiPencil } from '@mdi/js'
import Icon from '@mdi/react'
import { motion } from "framer-motion"
import React from 'react'

export default function CardNote({color} : {color : string}) {
  return (
    <motion.a  className='h-25' href='#'>
      <motion.div whileHover={{ scale : 1.1, transition: { duration: 0.5}}}  
     
      className='rounded-lg  p-2' style={{ backgroundColor : color }}>
      <div className='flex flex-col' >
        <div className='text-md font-bold text-gray-400' >Notes Title</div>
        <div className='text-sm font-bold'>24 Jan 2022 10:06</div>
      </div>
      <div className='mt-4'>
        <div className='text-white text-sm'>
            Le lorem ipsum est, en imprimerie, une suite de mots...
        </div>
      </div>
      </motion.div>
    </motion.a>
  )
}
