import React from 'react'
import CodeReviewFilter from './CodeReviewFilter'
import CodeReviewCard from './CodeReviewCard'
import { codereviews } from '../../data/codereview'

export default function PublicCodeReview() {
  return (
    <div role="tabpanel" style={{  overflowY : "auto" }} className="tab-content   bg-base-100 border-base-300 rounded-box p-6">
        <CodeReviewFilter />
        <div className='grid mb-6 mt-8  grid-cols-2 gap-6' >
           {
            codereviews.map((items) => <CodeReviewCard 
              code={items.code}
              dislike={items.dislike}
              like={items.like}
              name={items.username.name}
              picture={items.username.picture} 
              description={items.description}

            />)
           }
        </div>
    </div>
  )
}
