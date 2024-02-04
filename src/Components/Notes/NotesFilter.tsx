import React from 'react'
import ColorPoint from '../ColorPoint'
import { colors } from '../../data/color'
import CardColor from '../CardColor'
import CardNote from '../CardNote'

export default function NotesFilter() {
  return (
    <div className='p-2 border-l-2 h-full border-gray-400 shadow-2xl' style={{ width : "100%" }}>
      <div className='mt-10'>
       <div>
        <div className='my-2'>Color Filter</div>
            {
                colors.map((color) => <ColorPoint colors={color} />)
            }
        </div>
      </div>

    </div>
  )
}
