import React, { useState } from 'react'
import { motion } from "framer-motion"
export default function Range({value, title} :  {value : number, title : string}) {
    const speedDeveliryRange = value;
    const subForPercent =  speedDeveliryRange < 50 ? 1 : 3;
    const iconSpeedDeveliryRange =  (speedDeveliryRange-subForPercent)+"%";
    const colorSpeedDelevryRange =  speedDeveliryRange < 30 ?'range-error' : (speedDeveliryRange >= 30 && speedDeveliryRange <= 60  ? 'range-warning' : "range-success");
    const iconSpeedDelevryRange =  speedDeveliryRange < 30 ?'😡' : (speedDeveliryRange >= 30 && speedDeveliryRange <= 60  ? '😄' : "😌");

  return (
    
    <div className='h-20'>
        <label>{title} (<span>{(speedDeveliryRange)+"%"}</span> )</label>
        <div className='flex flex-row space-x-6 items-center'>
            <motion.input   animate={{  transition: { duration: 0.5}}}   type="range" min={0} max="100" value={speedDeveliryRange} className={"mt-2" + " range   range-xs "+colorSpeedDelevryRange} />
        </div>
        <div className='relative bottom-7 text-3xl' style={{ left : iconSpeedDeveliryRange }}>{iconSpeedDelevryRange}</div>
    </div>
    
  )
}
