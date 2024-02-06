import React, { useEffect, useMemo, useState } from 'react'
import Layout from './Layout'
import NotesFilter from '../Components/Notes/NotesFilter'
import CardNote from '../Components/CardNote'
import { notes } from '../data/notes'
import { useSelector } from 'react-redux'
import { useAppSelector } from '../Redux/Store/hook'
import { HandleColorPackageRender } from '../Redux/Services/HandleColorPackageRender'

export default function Notes() {
  const colorsPackage = useAppSelector((state) => state.colorsPackage);
  
  return (
    <Layout>
        <div className='h-full w-full flex '>
          <div className='grid mb-6 mt-8  grid-cols-4 gap-6 px-10' style={{ width : '84%', overflow : 'auto' }}>
                {
                  notes.map((note, key) => {
                    const color  = HandleColorPackageRender(colorsPackage);
                    return <CardNote key={key} color={color}/>
                  })
                }
          </div>
          <div className='h-full flex justify-end ' style={{ width : '16%' }}>
            <NotesFilter />
          </div>
        </div>
    </Layout>
  )
}
