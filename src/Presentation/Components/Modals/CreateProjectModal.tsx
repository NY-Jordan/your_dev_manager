import { mdiClose } from '@mdi/js'
import Icon from '@mdi/react'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { CreateNewProject, getAllProjects } from '../../../Infrastructure/Services/ProjectService'
import { useAppSelector } from '../../../Application/Store/hook'

type Inputs = {
  name: string
}

export default function CreateProjectModal({active, setActive} : {active : boolean, setActive :   Dispatch<SetStateAction<boolean>>,}) {
      const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();
    
    const CreateProJectStatus = useAppSelector(state => state.projects).create_project_status

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
      CreateNewProject(data.name);
    }

    React.useEffect(() => {
        if (CreateProJectStatus === 200) {
          setActive(false);
          toast.success('New Project Created');
          getAllProjects();

        }
        if (CreateProJectStatus === 400) {
          setActive(false);
          toast.error('Something went wrong');
        }
    }, [CreateProJectStatus]);

  return (
    <>
      <input type="checkbox" id="create_project_modal"  checked={active} className="modal-toggle " />
        <div className="modal backdrop-blur-sm dark:text-white dark:bg-slate-400" role="dialog">
        <div className="modal-box modal-top dark:text-white dark:bg-slate-800">
            <div className='flex justify-between'>
            <h3 className="font-bold text-lg">Create a New Project</h3>
            <a href='#'  onClick={() => setActive(false)} className='hover:bg-gray-200  dark:hover:text-black rounded-full'>
              <Icon path={mdiClose}  size={1}/>
            </a>
            </div>
            <p className="py-4">Enter the name of the project</p>
            <form method='post'  onSubmit={handleSubmit(onSubmit)}>
                <input  className={'input dark:bg-gray-100 dark:text-white input-bordered w-full '+(errors.name ? 'input-secondary' : '')} placeholder="Project's Name" 
                {...register("name", { required: true })}
                 />
                <div className='flex justify-end mt-4'>
                  <button className='btn btn-primary w-ful'>Create</button>
                </div>
            </form>
        </div>
        </div>
    </>
  )
}
