import { mdiArrowRightTop, mdiClose, mdiCog, mdiFileAccount, mdiMagnify, mdiSearchWeb } from '@mdi/js'
import Icon from '@mdi/react'
import React, { Dispatch, SetStateAction } from 'react'


export default function ProjectSettingsModal({active, setActive} : {active : boolean, setActive :   Dispatch<SetStateAction<boolean>>}) {
 
  function handleClose () {
    setActive(false);
  }

  return (  
    <>
      <input type="checkbox" id={"create_project_modal"}  checked={active} className="modal-toggle w-full" />
        <dialog className="modal backdrop-blur-sm modal-top justify-center " role="dialog">
          <div className="modal-box  rounded-lg   mt-4 dark:text-white dark:bg-slate-700 md:w-[800px] lg:w-[1000px] " >
              <div className='flex justify-between'>
              <h3 className=" text-3xl flex space-x-4">
                <Icon path={mdiCog} size={3/2} />
                <span>Settings</span>
              </h3>
              <a href='#'  onClick={() => handleClose()} className='hover:bg-gray-200 rounded-full dark:hover:text-black'>
                <Icon path={mdiClose}  size={1}/>
              </a>
              </div>
                <div className=' flex justify-end items-center space-x-4'>
                    <div className="avatar tooltip hover:cursor-pointer tooltip-left"  data-tip="Collaborators">
                        <div className="  w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" >
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className=" tooltip hover:cursor-pointer tooltip-left"  data-tip="Files">
                        <div className=" text-blue-600" >
                            <Icon path={mdiFileAccount} size={1} />
                        </div>
                    </div>
                </div>
                <div className='border-gray-100 border-2 w-full  dark:border-gray-700  border-t-0 my-4 p-2 rounded-md shadow-lg'>
                    <div  className="">
                        <h2 className=' text-lg mb-6'>Group Tasks</h2>
                        <table className="table">
                            <thead>
                                <tr className='bg-slate-100 dark:bg-slate-500'>
                                    <th className='text-center'>Name</th>
                                    <th className='text-center'>Users</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr  className='hover:bg-slate-200 dark:hover:bg-slate-500' >
                                    <td className='text-center '>IsiQuest</td>
                                    <td className='text-right flex justify-center'>
                                        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                            <div className="avatar">
                                                <div className="w-8">
                                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                                </div>
                                            </div>
                                            <div className="avatar">
                                                <div className="w-8">
                                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                                </div>
                                            </div>
                                            <div className="avatar">
                                                <div className="w-8">
                                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                                </div>
                                            </div>
                                            <div className="avatar placeholder">
                                                <div className="w-8 bg-neutral text-neutral-content">
                                                <span>+99</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>            
                        </table> 
                    </div>
                </div>
          </div>
        </dialog>
    </>
  )
}
