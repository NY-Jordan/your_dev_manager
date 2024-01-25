import React, { useState } from 'react'
import SectionTaskHeader from './SectionTaskHeader'
import SectionTaskCard from './SectionTaskCard'
import { Reorder } from 'framer-motion'
type props = {
    showMoreButton? : boolean,
    name: string
}
const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];

export default function SectionTask({showMoreButton, name}  : props) {
    const [items, setItems] = useState(initialItems);

  return (
    <div style={{  width : "25%"  }}>
      <SectionTaskHeader  showMoreButton={showMoreButton}  name={name} />
      <Reorder.Group axis="y" onReorder={setItems} values={items}>
        {items.map((item) => (
            <SectionTaskCard key={item} item={item} />
        ))}
    </Reorder.Group>
     
    </div>
  )
}
