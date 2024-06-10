import { mdiAccount, mdiAccountArrowDown, mdiArrowRightTop, mdiArrowTopRight, mdiArrowUpLeft, mdiArrowUpRightBold, mdiDelete, mdiPencil, mdiTagEditOutline } from '@mdi/js'
import Icon from '@mdi/react'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../Application/Store/hook';
import { log } from 'console';
import NewCollaborator from './Modals/NewCollaborator';
import secureLocalStorage from 'react-secure-storage';
import { getCookie } from 'react-use-cookie';
import { getAllProjects } from '../../Infrastructure/Services/ProjectService';
import { ProjectInterface } from '../../Domain/Entities/project.entities';
import Loader from './Loader/Loader';
import { useLocation, useNavigate } from 'react-router-dom';
import { AES } from 'crypto-js';
import SetProjectModal from './Modals/SetProjectModal';


export default function TableProjects() {
    const projectsState = useAppSelector(state => state.projects);
    const [activeNewCollaboratorModal, setActiveNewCollaboratorModal] = useState<boolean>(false);
    const [activeSetProject, SetActiveSetProject] = useState<boolean>(false);
    const [projects, setProjects] = useState<Array<ProjectInterface>>([]);
    const navigate = useNavigate();
    const location  = useLocation();

    useEffect(() => {
        if (getCookie('token')) {
            getAllProjects();
        }
    }, []);


    useEffect(() => {
        setProjects(projectsState.projects);
    }, [projectsState.projects]);


    const handleNewCollaborator = (projectId : number) => {
        setActiveNewCollaboratorModal(true);
        const key =  btoa(projectId.toString()+'-newCollab237');
        navigate(location.pathname+'?href='+key);
    }


    const handleUpdateProject = (projectId : number) => { 
        SetActiveSetProject(true)
        const key = btoa(projectId.toString()+'-updateProject237');
        navigate(location.pathname+'?href='+key);
    }
    
  return (
    <div className="overflow-x-auto" style={{ width : "100%" }}>
       
        {projects.length > 0 ? <table className="table">
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
            

            {projects  && projects.map((project : ProjectInterface, key:  number) =>  <tr  className='hover:bg-slate-200' key={key}>
                    <td className='text-center '>{project.name}</td>
                    <td className='text-center'>{(new Date(project.created_at)).toDateString()}</td>
                    <td className='text-center'>{project.delevry_at?.toString() ? (new Date(project.delevry_at)).toDateString()  : "-"}</td>
                    <td className='flex space-x-3 justify-center'>
                        <a href='#'  className='tooltip rounded-full hover:bg-slate-100 p-2 ' data-tip="delete" >
                            <Icon path={mdiDelete} size={3/4} color={'red'} />
                        </a>

                        <a href='#'  onClick={() => handleUpdateProject(project.id) } className='tooltip rounded-full hover:bg-slate-100 p-2' data-tip="edit">
                            <Icon path={mdiPencil} size={3/4}  />
                        </a>

                        <a href='#' className='tooltip rounded-full hover:bg-slate-100 p-2' data-tip="collaborators">
                            <Icon path={mdiAccount} size={3/4}  />
                        </a>

                        {project.access ?
                        <a  onClick={() => handleNewCollaborator(project.id)} className=' tooltip rounded-full hover:bg-slate-100 p-2 hover:cursor-pointer' data-tip="invite a collaborator">
                            <Icon path={mdiAccountArrowDown} size={3/4}  />
                        </a> :  
                        <a   className=' tooltip rounded-full hover:bg-slate-100 p-2 hover:cursor-pointer' data-tip="left the project">
                            <Icon path={mdiArrowRightTop} size={1} color={'red'}  />
                        </a>}
                    </td>
                </tr>
            )   }
            <SetProjectModal active={activeSetProject} setActive={SetActiveSetProject} />
            <NewCollaborator  active={activeNewCollaboratorModal} setActive={setActiveNewCollaboratorModal}  />

            </tbody>            
        </table> : 
        <div className='w-full  flex items-center justify-center my-6'>
            <Loader />
        </div>}
    </div>

  )
}
