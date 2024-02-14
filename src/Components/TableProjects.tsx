import { mdiDelete, mdiPencil } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'

export default function TableProjects() {
  return (
    <div className="overflow-x-auto" style={{ width : "100%" }}>
        
        <table className="table">
            {/* head */}
            <thead>
            <tr>
               
                <th>Project Name</th>
                <th>created_at</th>
                <th>delevery_at</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {/* row 1 */}
            <tr>
                
                <td>
                    <div className="flex items-center gap-3">
                        <div className="font-bold">Isiquest</div>
                    </div>
                </td>
                <td className='font-bold'>
                    25 Jan 2024
                </td>
                <td >-</td>
                <th>
                <button className="btn btn-ghost btn-xs"><Icon path={mdiDelete} size={1} color={"red"} /></button>
                <button className="btn btn-ghost btn-xs"><Icon path={mdiPencil} size={1} color={"gray"} /></button>

                </th>
            </tr>
            <tr className="bg-base-200">
                
                <td>
                    <div className="flex items-center gap-3">
                        <div className="font-bold">Isiquest</div>
                    </div>
                </td>
                <td className='font-bold'>
                    25 Jan 2024
                </td>
                <td >-</td>
                <th>
                <button className="btn btn-ghost btn-xs"><Icon path={mdiDelete} size={1} color={"red"} /></button>
                <button className="btn btn-ghost btn-xs"><Icon path={mdiPencil} size={1} color={"gray"} /></button>

                </th>
            </tr>
            <tr>
                
                <td>
                    <div className="flex items-center gap-3">
                        <div className="font-bold">Isiquest</div>
                    </div>
                </td>
                <td className='font-bold'>
                    25 Jan 2024
                </td>
                <td >-</td>
                <th>
                <button className="btn btn-ghost btn-xs"><Icon path={mdiDelete} size={1} color={"red"} /></button>
                <button className="btn btn-ghost btn-xs"><Icon path={mdiPencil} size={1} color={"gray"} /></button>

                </th>
            </tr>
            
            </tbody>            
        </table>
    </div>

  )
}
