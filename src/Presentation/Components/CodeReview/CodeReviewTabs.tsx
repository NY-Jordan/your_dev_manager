import React from 'react'
import PublicCodeReview from './PublicCodeReview'
import MyCodeReview from './MyCodeReview'

export default function CodeReviewTabs() {
  return (
    <div role="tablist" className="tabs h-full tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" style={{ width : "200px" }} aria-label="My Code Review" />
        <MyCodeReview />
        <input type="radio" name="my_tabs_2" role="tab" className="tab" style={{ width : "200px" }} aria-label="Public Code Review" checked />
        <PublicCodeReview />
    </div>
  )
}
