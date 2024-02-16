import React, { useEffect, useMemo, useState } from 'react'
import Layout from './Layout'
import NotesFilter from '../Components/Notes/NotesFilter'
import CardNote from '../Components/CardNote'
import { notes } from '../data/notes'
import { useSelector } from 'react-redux'
import { useAppSelector } from '../Redux/Store/hook'
import { HandleColorPackageRender } from '../Redux/Services/HandleColorPackageRender'
import Icon from '@mdi/react'
import { mdiPencil } from '@mdi/js'

export default function Notes() {
  const colorsPackage = useAppSelector((state) => state.colorsPackage);
  
  return (
    
        <div className='h-full w-full flex '>
          <div className='w-full h-full pt-10'>
            <div className='mx-4 flex flex-row items-center'>
              <div className='text-2xl'>My Bloc Notes__</div>
              <div>
                <Icon path={mdiPencil} size={1} />
              </div>
            </div>
            <div className='grid mb-6 mt-8  grid-cols-4 gap-6 px-10 ' style={{ width : '100%' }}>
                  {
                    notes.map((note, key) => {
                      const color  = HandleColorPackageRender(colorsPackage);
                      return <CardNote key={key} color={color}/>
                    })
                  }
            </div>
          </div>
          <div className='h-full flex justify-end items-center' style={{ width : '30%', overflow : "scroll" }}>
            <NotesFilter />
          </div>
        </div>
    
  )
}
