import React from 'react'

export default function CardColor({color} :  {color : string}) {
  return (
    <div className='p-2  h-2 w-4 mx-1' style={{ backgroundColor : color }}></div>
  )
}
