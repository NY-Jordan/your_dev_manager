import { mdiClose } from '@mdi/js'
import Icon from '@mdi/react'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { CreateNewProject, getAllProjects, update } from '../../../Infrastructure/Services/ProjectService'
import { useAppDispatch, useAppSelector } from '../../../Application/Store/hook'
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
  const dispatch  = useAppDispatch();
  //project state
  const projectState = useAppSelector(state => state.projects);
  //list of projects
  const projects = projectState.projects;
  //update project status
  const updateProjectState = projectState.update_project_status;

  const [project, setProject] = useState<ProjectInterface>();
  const [inputValue, setInputValue] = useState(project?.name);

  //get projectId on GET
  const href  = searchParams.get('href');
  const projectId = href ?  atob(href).split('-')[0] : '';
 


  useEffect(() => {
    //if projectId filter and get  the project to update
    if (projectId) {
      const Editproject = projects.filter((item : ProjectInterface) => {
        return item.id === parseInt(projectId)
      })[0]
      setProject(Editproject);
      setInputValue(Editproject.name);
    }
  }, [projectId])



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
      if (updateProjectState == true) {
        toast.success('Project update sucessfully');
        setLoader(false);
        handleClose()
      }
      if (updateProjectState == false) {
        toast.error('Something went wrong');
        setLoader(false);
      }
      dispatch(InitProjectUpdateState());
      getAllProjects();
    }, [updateProjectState])




    function handleClose () {
      setActive(false);
      navigate(location.pathname);
    }


  return (
    <>
      <input type="checkbox" id="create_project_modal"  checked={active} className="modal-toggle " />
        <div className="modal backdrop-blur-sm" role="dialog">
        <div className="modal-box modal-top dark:bg-slate-700 dark:text-white">
            <div className='flex justify-between'>
            <h3 className="font-bold text-lg">Update Project's Name</h3>
            <a href='#'  onClick={() => handleClose()} className='hover:bg-gray-200 dark:hover:text-black rounded-full'>
              <Icon path={mdiClose}  size={1}/>
            </a>
            </div>
            <p className="py-4">Project's Name</p>
            <form method='post'  onSubmit={handleSubmit(onSubmit)}>
               {project &&  <input    className={'input input-bordered dark:bg-slate-600 w-full '+(errors.name ? 'input-secondary' : '')} placeholder="Project's Name" 
                {...register("name", { 
                  required: true ,
                  onChange: (e) => setInputValue(e.target.value),
                })}
                value={inputValue}
                 /> }
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
