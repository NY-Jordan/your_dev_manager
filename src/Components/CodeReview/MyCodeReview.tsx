import React from 'react'
import CodeReviewFilter from './CodeReviewFilter'

export default function MyCodeReview() {
  return (
    <div role="tabpanel" className="tab-content h-full  bg-base-100 border-base-300 rounded-box p-6">
        <CodeReviewFilter />
    </div>
  )
}
