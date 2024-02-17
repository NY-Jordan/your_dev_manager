import React from 'react'
import CodeReviewFilter from './CodeReviewFilter'
import CodeReviewCard from './CodeReviewCard'
import { codereviews } from '../../data/codereview'
import { useResponsive } from '../../Hooks/useResponsive'

export default function PublicCodeReview() {
  const {isTabletOrMobile} = useResponsive();
  return (
    <div role="tabpanel" style={{  overflowY : "auto" }} className="tab-content   bg-base-100 border-base-300 rounded-box p-6">
        <CodeReviewFilter />
        <div className={'mb-6 mt-8  gap-6 ' + (isTabletOrMobile ? 'grid grid-cols-1' : ' grid grid-cols-2')}>
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
