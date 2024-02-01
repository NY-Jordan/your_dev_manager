import { mdiHeart, mdiHeartOutline, mdiThumbDown, mdiThumbDownOutline } from '@mdi/js'
import Icon from '@mdi/react'
import React, { useState } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

type props = {
  name : string,
  code : string,
  dislike : number,
  like : number,
  description : string,
  picture : string

}
export default function CodeReviewCard({code, name, like, dislike, description, picture} : props) {
   
  const [colorLikeButton, setcolorLikeButton] = useState('black');
  const [iconLikeButton, seticonLikeButton] = useState(mdiHeartOutline);
  const handleLikeButton  = () => {
    seticonLikeButton(mdiHeart);
    setcolorLikeButton('pink');

  }
  return (
    <div  >
      <div style={{ maxHeight : 150 , overflow : 'auto'}}>
      <CopyBlock
            language={'javascript'}
            text={code}
            showLineNumbers={true}
            theme={dracula}
            codeBlock
          />
      </div>
        <div className='flex flex-row items-center my-2 justify-between'>

          <div className='flex flex-row items-center space-x-4'>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind rounded-full CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className='font-bold text-blueGray-200'>{name}</div>
          </div>
          <div className='flex flex-row space-x-6'>
            <div className='flex flex-row space-x-2'>
              <a href='#' >
                <Icon path={mdiThumbDownOutline} size={1} />
              </a>
              <div>{dislike}</div>
            </div>
            <div className='flex flex-row space-x-2'>
              <a href='#' onClick={() => handleLikeButton()}>
                <Icon path={iconLikeButton} size={1}   color={colorLikeButton}  />
              </a>
              <div>{like}</div>
            </div>
          </div>
        </div>
      <div>{description}</div>
    </div>
    )
}
