import React from 'react'
import Layout from './Layout'
import NotesFilter from '../Components/Notes/NotesFilter'
import CardNote from '../Components/CardNote'

export default function Notes() {
  return (
    <Layout>
        <div className='h-full w-full flex '>
          <div className='grid mb-6 mt-8  grid-cols-4 gap-6 px-10' style={{ width : '84%', overflow : 'auto' }}>
                <CardNote />
                <CardNote />
                <CardNote />
                <CardNote />
                <CardNote />
                <CardNote />
                <CardNote />
                <CardNote />
                <CardNote />
                <CardNote />
                <CardNote />
                <CardNote />
                <CardNote />
                <CardNote />
                <CardNote />
                <CardNote />
                <CardNote />
          </div>
          <div className='h-full flex justify-end ' style={{ width : '16%' }}>
            <NotesFilter />
          </div>
        </div>
    </Layout>
  )
}
