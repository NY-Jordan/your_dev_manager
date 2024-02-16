import React from 'react'
import Layout from './Layout'
import CodeReviewTabs from '../Components/CodeReview/CodeReviewTabs'

export default function CodeReview() {
  return (
    
        <div className='h-screen bg-white'>
            <div className='py-10 mx-2'>
                <CodeReviewTabs />
            </div>
        </div>
   
  )
}
