import { mdiClose } from '@mdi/js'
import Icon from '@mdi/react'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { CreateNewProject } from '../../../Infrastructure/Services/ProjectService'

type Inputs = {
  name: string
}

export default function CreateProjectModal({active, setActive} : {active : boolean, setActive :   Dispatch<SetStateAction<boolean>>,}) {
      const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const [creationStatus, setCreationStatus] = useState<number>(0)

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const result  =  CreateNewProject(data.name);
    }

    React.useEffect(() => {
        if (creationStatus === 200) {
          setActive(false);
          toast.success('New Project Created');
          setCreationStatus(0);

        }
        if (creationStatus === 400) {
          setActive(false);
          toast.error('Something went wrong');
          setCreationStatus(0);
        }
    }, [creationStatus]);

  return (
    <>
      <input type="checkbox" id="create_project_modal"  checked={active} className="modal-toggle " />
        <div className="modal backdrop-blur-sm" role="dialog">
        <div className="modal-box modal-top">
            <div className='flex justify-between'>
            <h3 className="font-bold text-lg">Create a New Project</h3>
            <a href='#'  onClick={() => setActive(false)} className='hover:bg-gray-200 rounded-full'>
              <Icon path={mdiClose}  size={1}/>
            </a>
            </div>
            <p className="py-4">Enter the name of the project</p>
            <form method='post'  onSubmit={handleSubmit(onSubmit)}>
                <input  className={'input input-bordered w-full '+(errors.name ? 'input-secondary' : '')} placeholder="Project's Name" 
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
