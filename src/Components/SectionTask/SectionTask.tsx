import React, { useState } from 'react'
import SectionTaskHeader from './SectionTaskHeader'
import SectionTaskCard from './SectionTaskCard'
import { Reorder } from 'framer-motion'
import AddTask from './AddTask'
type props = {
    showMoreButton? : boolean,
    name: string,
    data : {
      color : string,
      tasks : Array<string>
    },
    
}

export default function SectionTask({showMoreButton, name, data}  : props) {
  const initialItems  =  data.tasks;
    const [items, setItems] = useState(initialItems);
  return (
    <div style={{  width : "25%", maxWidth : "24%", overflowX : 'hidden'}}>
      <SectionTaskHeader count={data.tasks.length} showMoreButton={showMoreButton}  name={name} />
      <Reorder.Group axis="y" style={{ marginTop : "10%",  }} onReorder={setItems} values={items}>
        {items.map((item, key) => (
            <SectionTaskCard key={item} position={key}  color={data.color}  item={item} />
        ))}
    </Reorder.Group>
     
    </div>
  )
}
