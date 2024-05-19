import React from 'react'
import CardColor from './CardColor'
import { useAppDispatch } from '../../Application/Store/hook'
import { ChangeColorPackage } from '../../Application/Actions/ColorsActions'

type props = {
  colors : string[],
  key : number
}

export default function ColorPoint({colors, key} : props) {
  const dispatch = useAppDispatch();
  const handleChangeColorPackage = () => {
    dispatch(ChangeColorPackage(colors))
  }
  return (
    <div className='flex flex-row items-center my-2'>
      <input type="radio" value={key} onChange={handleChangeColorPackage} name="ColorPackage" className="radio radio-accent input-xs "  />
     {
        colors.map((value, key) => <CardColor color={value} />)
      }
         
      
    </div>
  )
}
