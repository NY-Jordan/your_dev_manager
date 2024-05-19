import { mdiAccount, mdiAccountArrowDown, mdiDelete, mdiPencil, mdiTagEditOutline } from '@mdi/js'
import Icon from '@mdi/react'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../Application/Store/hook';
import { log } from 'console';
import NewCollaborator from './Modals/NewCollaborator';
import secureLocalStorage from 'react-secure-storage';
import { getCookie } from 'react-use-cookie';
import { getAllProjects } from '../../Infrastructure/Services/ProjectService';

type Project = {
    created_at: Date
    delevry_at? : Date|null
    id: number,
    name: string
    updated_at: string
    user_id: Number
}

export default function TableProjects() {
    const dispatch  = useAppDispatch();
    const projectsState = useAppSelector((state) => state.projects);
    const [activeNewCollaboratorModal, setActiveNewCollaboratorModal] = useState<boolean>(false)

    useEffect(() => {
        if (getCookie('token')) {
            getAllProjects();
        }
    }, []);


  return (
    <div className="overflow-x-auto" style={{ width : "100%" }}>
        
        <table className="table">
            {/* head */}
            <thead>
            <tr className='bg-slate-100'>
               
                <th className='text-center'>Project Name</th>
                <th className='text-center'>created_at</th>
                <th className='text-center'>delevery_at</th>
                <th className='text-center'>Actions</th>
            </tr>
            </thead>
            <tbody>
            

            { projectsState.projects && projectsState.projects.map((value : Project, key:  number) =>  <tr  className='hover:bg-slate-200' key={key}>
                    <td className='text-center '>{value.name}</td>
                    <td className='text-center'>{(new Date(value.created_at)).toDateString()}</td>
                    <td className='text-center'>{value.delevry_at?.toString() ? (new Date(value.delevry_at)).toDateString()  : "-"}</td>
                    <td className='flex space-x-3 justify-center'>
                        <a href='#' className='tooltip rounded-full hover:bg-slate-100 p-2' data-tip="delete" >
                            <Icon path={mdiDelete} size={3/4} color={'red'} />
                        </a>

                        <a href='#' className='tooltip rounded-full hover:bg-slate-100 p-2' data-tip="edit">
                            <Icon path={mdiPencil} size={3/4}  />
                        </a>

                        <a href='#' className='tooltip rounded-full hover:bg-slate-100 p-2' data-tip="collaborators">
                            <Icon path={mdiAccount} size={3/4}  />
                        </a>

                        <a href='#' onClick={() => setActiveNewCollaboratorModal(true)} className=' tooltip rounded-full hover:bg-slate-100 p-2' data-tip="invite a collaborator">
                            <Icon path={mdiAccountArrowDown} size={3/4}  />
                        </a>
                    </td>
                    <NewCollaborator  active={activeNewCollaboratorModal} setActive={setActiveNewCollaboratorModal} projectId={value.id} />
                </tr>
            )        
            }
            </tbody>            
        </table>
    </div>

  )
}
