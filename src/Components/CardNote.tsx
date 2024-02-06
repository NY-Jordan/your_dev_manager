import { mdiDelete, mdiPencil } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'

export default function CardNote({color} : {color : string}) {
  return (
    <div className='rounded-lg h-25 p-2' style={{ backgroundColor : color }}>
      <div className='flex flex-col' >
        <div className='text-md font-bold text-gray-400' >24 janvuer 2022 à 10:06</div>
        {/* <div className='flex flex-row space-x-2'>
            <a href='#'>
                <Icon path={mdiPencil} color={'red'} size={1} />
            </a>
            <a href='#'>
                <Icon path={mdiDelete} color={'red'} size={1} />
            </a>
        </div> */}
      </div>
      <div className='mt-4'>
        <div className='text-white text-lg'>
            Le lorem ipsum est, en imprimerie, une suite de mots
        </div>
      </div>
    </div>
  )
}
