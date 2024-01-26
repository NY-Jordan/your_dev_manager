import React, { useState } from 'react'
import SectionTaskHeader from './SectionTaskHeader'
import SectionTaskCard from './SectionTaskCard'
import { Reorder } from 'framer-motion'
type props = {
    showMoreButton? : boolean,
    name: string
}
const initialItems = ["backlog", "started", "in progress", "done", "done", "done", "done", "done"];

export default function SectionTask({showMoreButton, name}  : props) {
    const [items, setItems] = useState(initialItems);

  return (
    <div style={{  width : "25%"}}>
      <SectionTaskHeader  showMoreButton={showMoreButton}  name={name} />
      <Reorder.Group axis="y" style={{ marginTop : "10%" }} onReorder={setItems} values={items}>
        {items.map((item, key) => (
            <SectionTaskCard key={item} position={key} item={item} />
        ))}
    </Reorder.Group>
     
    </div>
  )
}
