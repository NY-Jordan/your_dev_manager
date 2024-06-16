import { mdiAccount, mdiHandPointingDown, mdiHandPointingRight, mdiPlus } from '@mdi/js'
import Icon from '@mdi/react'
import { PropsWithChildren, ReactElement, ReactNode, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import MenuItem from './MenuItem'
import { getAllGroupTasks } from '../../../Infrastructure/Services/GroupTasksService'
import { GroupTaskInterface } from '../../../Domain/Entities/groups_task.entities'
import AddNewGroupTasksModal from '../Modals/AddNewGroupTasksModal'
import { useAppDispatch, useAppSelector } from '../../../Application/Store/hook'
import toast from 'react-hot-toast'
import { initGroupTaskState } from '../../../Application/Actions/GroupTaskActions'
import { ProjectInterface } from '../../../Domain/Entities/project.entities'

type props = {
  title : string, 
  status : boolean, 
  icon? : string,
  project : ProjectInterface
}
export default function ProjectsMenu(props : PropsWithChildren<props>) {
  const [activeAddGroupModal, setActiveAddGroupModal] = useState(false);
  const [groups, setGroups] = useState<Array<GroupTaskInterface>|null>();
  const CreateGroupTaskState = useAppSelector(state => state.GroupTasks).create_task_group_status;
  const dispatch = useAppDispatch();


  useEffect(() => {
    const getGroupTasks = async () => {
        const groups = await getAllGroupTasks(props.project.id);
        setGroups(groups);
    }
    if (!groups) {
      getGroupTasks();
    }
  }, []);


  useEffect(() => {
    console.log(CreateGroupTaskState);
    
     if (CreateGroupTaskState.status === true && CreateGroupTaskState.projectId === props.project.id) {
        toast.success('Task Group created successfully');
        setActiveAddGroupModal(false);
    }
    if(CreateGroupTaskState.status === false && CreateGroupTaskState.projectId === props.project.id){
        toast.error('Something went wrong');
    } 
    dispatch(initGroupTaskState())
},[CreateGroupTaskState.status]);
  

  return (
    <li>
        <details >
          <summary  className='hover:bg-gray-200  dark:hover:bg-gray-600 dark:text-white '>
          {
              props.icon && <Icon
              path={props.icon}
              size={1}
               />
            }
            <span className='dark:text-white dark:hover:text-black'>{props.title}</span>
          </summary>
          <ul className=''>
            {props.project.access && <MenuItem title='Add a  Group Tasks' onClick={() => setActiveAddGroupModal(true) }  goTo={'#'}   icon={mdiPlus}   status={false}  />}
            {
              groups && groups.map((group) => {
                return  <MenuItem title={group.name} isSubMenu goTo={'/'+group.name}   icon={mdiHandPointingRight}   status={false}  />

              })
            }
          </ul>
          <AddNewGroupTasksModal projectId={props.project.id} active={activeAddGroupModal} setActive={setActiveAddGroupModal} />

      </details>
    </li>
    
  )
}
