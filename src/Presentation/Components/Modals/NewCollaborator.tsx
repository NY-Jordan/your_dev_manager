import { mdiArrowRightTop, mdiClose, mdiMagnify, mdiSearchWeb } from '@mdi/js'
import Icon from '@mdi/react'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import CollaboratorSearch from '../CollaboratorSearch'
import { SearchUsers } from '../../../Infrastructure/Services/ProjectService'
import { UserInterface } from '../../../Domain/Entities/user.entities'
import { useAppSelector } from '../../../Application/Store/hook'
import { AES, enc } from 'crypto-js'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';


export default function NewCollaborator({active, setActive} : {active : boolean, setActive :   Dispatch<SetStateAction<boolean>>}) {
  const [search, setSearch] = useState<string|null>(null);
  const projectUserState = useAppSelector(state => state.projectUserSearch);
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const href  = searchParams.get('href');
  const projectId = href ?  atob(href).split('-')[0] : '';

  useEffect(() => {
    if (active) {
      if (search !== null && projectId.length) {
        SearchUsers(search, parseInt(projectId));
      } 
    }
      
  }, [search]);
  
  function handleClose () {
    setActive(false);
    navigate(location.pathname);
  }

  return (  
    <>
      <input type="checkbox" id={"create_project_modal"}  checked={active} className="modal-toggle w-full" />
        <dialog className="modal backdrop-blur-sm modal-top justify-center " role="dialog">
          <div className="modal-box  rounded-lg   mt-4 dark:text-white dark:bg-slate-700 md:w-[700px] lg:w-[800px] " >
              <div className='flex justify-between'>
              <h3 className="font-bold text-lg">Invite a new collaborator on the Project</h3>
              <a href='#'  onClick={() => handleClose()} className='hover:bg-gray-200 rounded-full dark:hover:text-black'>
                <Icon path={mdiClose}  size={1}/>
              </a>
              </div>
              <p className="py-4">Tap the username or email of the user</p>
              <form method='post'  >
                <label className="input input-bordered  dark:bg-slate-700 flex items-center gap-2 focus-within:outline-none w-full focus:border-blue-300">
                  <Icon path={mdiMagnify} size={1} />
                  <input className=' dark:bg-slate-700' onChange={(e) => setSearch(e.target.value)}   />
                </label>
                <div className='border-gray-100 border-2 w-full dark:border-slate-700 dark:bg-gray-700 my-4 p-2 rounded-md shadow-lg'>
                  <div className='max-h-[300px] overflow-y-auto   overflow-x-hidden'>
                        {projectUserState.users.length ?
                          projectUserState.users?.map((item : UserInterface, key : number) => {
                            return <CollaboratorSearch key={key} name={item.name} picture={item.picture} projectId={parseInt(projectId)} userId={item.id} />
                          })
                           :
                           <div className='text-xl text-center py-14' >Search Your Collaborator</div>
                        }                  </div>
                </div>
              </form>
          </div>
        </dialog>
    </>
  )
}
