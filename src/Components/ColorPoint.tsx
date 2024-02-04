import React from 'react'
import CardColor from './CardColor'

type props = {
  colors : string[]
}

export default function ColorPoint({colors} : props) {
  return (
    <div className='flex flex-row items-center my-2'>
      <input type="radio" name="radio-4" className="radio radio-accent input-xs " checked />
     {
        colors.map((value, key) => <CardColor color={value} />)
      }
         
      
    </div>
  )
}
