import React, { useEffect, useState } from 'react'
import { NotificationInterface } from '../../../../Domain/Entities/notifications.entities'
import { acceptProjectInvitation, getAllProjects, getProjectInvitation, refuseProjectInvitation } from '../../../../Infrastructure/Services/ProjectService';
import { ProjectInvitationInterface } from '../../../../Domain/Entities/project.entities';
import { useAppDispatch, useAppSelector } from '../../../../Application/Store/hook';
import toast from 'react-hot-toast';
import { getAllNotification } from '../../../../Infrastructure/Services/NotificationService';
import { InitInvitationStatus } from '../../../../Application/Actions/ProjectActions';
import { InvitationEnum } from '../../../../Domain/Enums/InvitationEnum';


const defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3FoTTUAqf4eBIuMo4rE45GWh-TjwI66eSUA&usqp=CAU'

export default function NotificationInvitationConfirmation({notification} : { notification: NotificationInterface}) {

    const [invitation, setInvitation] = useState<ProjectInvitationInterface|null>();
    const [loading_accept, setLoadingAccept] = useState(false);
    const [loading_refuse, setLoadingRefuse] = useState(false);
    const invitationAcceptState = useAppSelector(state => state.projects).accept_invitation_status
    const invitationRefusedState = useAppSelector(state => state.projects).refuse_invitation_status
    const uuid  = notification.notifiable_contentt_id;
    const dispatch  = useAppDispatch();

    async function getInvitation() {
        const _invitation  = await getProjectInvitation(uuid)
        setInvitation(_invitation);
    }
    
    useEffect(() => {
      getInvitation();
    },[]);


    useEffect(() => {
        if (invitationAcceptState.uuid === uuid && invitationAcceptState.status === true) {
            setLoadingAccept(false);
            getInvitation();
            dispatch(InitInvitationStatus());
            toast.success('Invitation accepted succesfully');
        }

        if (invitationAcceptState.uuid === uuid && invitationAcceptState.status === false) {
            toast.error('Something went wrong');
            setLoadingAccept(false);
        }
    },[invitationAcceptState]);


    useEffect(() => {
      if (invitationRefusedState.uuid === uuid && invitationRefusedState.status === true) {
          setLoadingRefuse(false);
          getInvitation();
          dispatch(InitInvitationStatus());
          toast.success('Invitation refused succesfully');
      }
      if (invitationRefusedState.uuid === uuid && invitationRefusedState.status === false) {
          toast.error('Something went wrong');
          setLoadingRefuse(false);
      }
  },[invitationRefusedState]);

  function acceptInvitation() {
      setLoadingAccept(true);
      acceptProjectInvitation(uuid)
  }

  function refuseInvitation() {
    setLoadingRefuse(true);
    refuseProjectInvitation(uuid)
  }



  return (
    <>
    {invitation && <>
        <div className='my-2 flex space-x-2 hover:bg-slate-200 p-2 dark:bg-gray-900 rounded-md'>
              <div  className="btn btn-ghost btn-circle avatar w-18">
                <div className=" rounded-full">
                  <img alt="Tailwind CSS Navbar component"  src={invitation.sender.picture} />
                </div>
              </div>
              <div className='flex flex-col'>
                <p className='text-sm'> <strong> {invitation.sender.username} </strong>
                just invited you to join the
               <strong> {invitation.project.name}</strong>  project</p>
            {invitation.status === InvitationEnum.invitation_init ? <div className='flex space-x-3 mt-2 px-3'>
                <button  onClick={() => acceptInvitation()} className='w-1/2 btn btn-secondary btn-sm'>
                    {loading_accept ? <span className="loading loading-spinner loading-sm"></span> : <span>Join</span>}
                </button>
                <button onClick={() => refuseInvitation()}  className='w-1/2 btn btn-error   btn-sm'>
                {loading_refuse ? <span className="loading loading-spinner loading-sm"></span> : <span>Refuse</span>}
                </button>
              </div>
               :( 
                invitation.status === InvitationEnum.invitation_accepted ? 
                <button    className="btn btn-secondary btn-sm my-2 hover:cursor-not-allowed">Accepted</button>
                :   <button className="btn btn-error btn-sm my-2  hover:cursor-not-allowed">Refused</button>
                )
              }
              </div>
          </div>
          <div className='divider dark:text-white'></div>
    
        </>}
        </>
    
  )
}
