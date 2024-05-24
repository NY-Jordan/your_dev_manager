import { mdiAlert, mdiArrowRightTop } from '@mdi/js'
import Icon from '@mdi/react'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { SendInvitationToUser } from '../../Infrastructure/Services/ProjectService';
import { useAppDispatch, useAppSelector } from '../../Application/Store/hook';
import { InitInvitationStatus } from '../../Application/Actions/ProjectActions';

export default function CollaboratorSearch({name, picture, projectId, userId} : {name : string, picture : string, projectId : number , userId: number}) {
    const [status, setStatus] =useState<number>(0);
    const [loader, setLoader] =useState<boolean>(false);
    const SendInvitationStatus = useAppSelector(state => state.projects).send_invitation_status;
    const dispatch = useAppDispatch();
    
    function SendInvitation(){
        setLoader(true);
        SendInvitationToUser(userId , projectId);
    }

    function handleStatusInvitation(status:number) {
        if (status === 200) {
            setLoader(false);
            toast.success('Invitation was sent successfully.', {
                position: 'top-left',
            });
        }
        if (status === 400) {
            setLoader(false);
            toast.error('somethings went wrong.',{
                position: 'top-left',
            });
        }
        if (status === 412) {
            setLoader(false);
            toast.custom(<div className='bg-amber-400 min-w-60  flex space-x-4 items-center text-white p-3 rounded-lg text-md font-bold'>
                 <a className='rounded-full bg-white p-1'>
                 <Icon path={mdiAlert} size={3/4} color={'#fbbf24'}  />
                 </a>
                <span>Invitation already sent</span>
            </div>, {
                position: 'top-left',
            });
        }
    }
    
    useEffect(() => {
        if (SendInvitationStatus.user_id === userId && SendInvitationStatus.project_id === projectId) {
            handleStatusInvitation(SendInvitationStatus.status);
            dispatch(InitInvitationStatus());
        }
    }, [SendInvitationStatus.status]); 

  return (
       <a className=" flex justify-between my-4 hover:cursor-pointer  hover:bg-blue-100 py-2 rounded-sm p-1" >
        <div className='flex space-x-3'>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={picture} />
            </div>
            </div>
            <div className='flex flex-col'>
            <span className='font-bold'>{name}</span>
            <small>Software Developer</small>
            </div>
        </div>

        <div>
            {loader ? <span className="loading loading-spinner loading-md"></span> :
                <a href='#' onClick={SendInvitation}  className=' tooltip tooltip-left rounded-full hover:bg-slate-100 p-2' data-tip="send an invitation">
                    <Icon path={mdiArrowRightTop} size={1}  />
            </a>}
        </div>

        </a>
  )
}
