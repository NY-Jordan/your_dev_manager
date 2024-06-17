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
import { createGroupTasks } from '../../../Infrastructure/Services/GroupTasksService'
import { initGroupTaskState } from '../../../Application/Actions/GroupTaskActions'
import { GroupTaskStatusEnum } from '../../../Domain/Enums/GroupTaskStatusEnum'

type Inputs = {
  name: string,
  status : number
}

export default function AddNewGroupTasksModal({active, setActive, projectId} : {active : boolean, setActive :   Dispatch<SetStateAction<boolean>>, projectId : number}) {
    const [loader, setLoader] = useState(false);
    const CreateGroupTaskState = useAppSelector(state => state.GroupTasks).create_task_group_status
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setLoader(true);
        createGroupTasks(projectId, data.name, data.status)
    }

    useEffect(() => {
        setLoader(false);
    }, [CreateGroupTaskState])

    return (
        <>
        <input type="checkbox" id="create_project_modal"  checked={active} className="modal-toggle " />
            <div className="modal backdrop-blur-sm" role="dialog">
            <div className="modal-box modal-top dark:bg-slate-700 dark:text-white">
                <div className='flex justify-between'>
                <h3 className="font-bold text-lg">New Group Tasks</h3>
                <a href='#'  onClick={() => setActive(false)} className='hover:bg-gray-200 dark:hover:text-black rounded-full'>
                <Icon path={mdiClose}  size={1}/>
                </a>
                </div>
                <p className="py-4">Group's Name</p>
                <form method='post'  onSubmit={handleSubmit(onSubmit)}>
                   <div>
                    <input    className={'input input-bordered dark:bg-slate-600 w-full '+(errors.name ? 'input-secondary' : '')} placeholder="Group's Name" 
                        {...register("name", { 
                        required: true ,
                        })}
                        /> 
                   </div>
                    <div className='my-8'>
                        <select className='select dark:bg-slate-600 w-full ' 
                        {...register('status',{
                            required: true ,
                        })}>

                            <option className='dark:text-white text-md' value={GroupTaskStatusEnum.public}>Public</option>
                            <option value={GroupTaskStatusEnum.private}>Private</option>
                        </select>
                    </div>
                    <div className='flex justify-end mt-4'>
                    <button className='btn btn-primary w-ful'>
                    {
                        loader ? <Loader /> : <span>Add</span>
                    }
                    </button>
                    </div>
                </form>
            </div>
            </div>
        </>
  )
}
