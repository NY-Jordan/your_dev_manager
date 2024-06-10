import { mdiClose } from '@mdi/js'
import Icon from '@mdi/react'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { CreateNewProject, getAllProjects, update } from '../../../Infrastructure/Services/ProjectService'
import { useAppSelector } from '../../../Application/Store/hook'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { ProjectInterface } from '../../../Domain/Entities/project.entities'
import Loader from '../Loader/Loader'
import { InitProjectUpdateState } from '../../../Application/Actions/ProjectActions'

type Inputs = {
  name: string
}

export default function SetProjectModal({active, setActive} : {active : boolean, setActive :   Dispatch<SetStateAction<boolean>>}) {
  let [searchParams, setSearchParams] = useSearchParams();
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const href  = searchParams.get('href');
  const projects = useAppSelector(state => state.projects).projects;
  const update_project_state = useAppSelector(state => state.projects).update_project_status;
  const projectId = href ?  atob(href).split('-')[0] : '';
  const project =  projects.filter((item : ProjectInterface) => {
    return item.id === parseInt(projectId)
  })[0] ;

  const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
  } = useForm<Inputs>();
    

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
      setLoader(true);
      update(data.name, parseInt(projectId));
    }


    useEffect(() => {
      if (update_project_state == true) {
        toast.success('Project update sucessfully');
        setLoader(false);
        handleClose()

      }
      if (update_project_state == false) {
        toast.error('Something went wrong');
        setLoader(false);
      }
      InitProjectUpdateState();
      getAllProjects();
    }, [update_project_state])


    function handleClose () {
      setActive(false);
      navigate(location.pathname);
    }


  return (
    <>
      <input type="checkbox" id="create_project_modal"  checked={active} className="modal-toggle " />
        <div className="modal backdrop-blur-sm" role="dialog">
        <div className="modal-box modal-top">
            <div className='flex justify-between'>
            <h3 className="font-bold text-lg">Update Project's Name</h3>
            <a href='#'  onClick={() => handleClose()} className='hover:bg-gray-200 rounded-full'>
              <Icon path={mdiClose}  size={1}/>
            </a>
            </div>
            <p className="py-4">Project's Name</p>
            <form method='post'  onSubmit={handleSubmit(onSubmit)}>
               {project && <input   className={'input input-bordered w-full '+(errors.name ? 'input-secondary' : '')} placeholder="Project's Name" 
                {...register("name", { required: true })}
                defaultValue={project.name}
                 />}
                <div className='flex justify-end mt-4'>
                  <button className='btn btn-primary w-ful'>
                   {
                    loader ? <Loader /> : <span>Update</span>
                   }
                  </button>
                </div>
            </form>
        </div>
        </div>
    </>
  )
}
