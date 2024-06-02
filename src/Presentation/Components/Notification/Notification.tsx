import React, { useEffect } from 'react'
import { useAppSelector } from '../../../Application/Store/hook'
import { NotificationInterface } from '../../../Domain/Entities/notifications.entities';
import { getAllNotification } from '../../../Infrastructure/Services/NotificationService';
import { getProjectInvitation } from '../../../Infrastructure/Services/ProjectService';
import { NotificationEnum } from '../../../Domain/Enums/NotificationEnums';
import NotificationInvitation from './Invitations/NotificationInvitation';
import NotificationInvitationConfirmation from './Invitations/NotificationInvitationConfirmation';
import NotificationInvitationAccepted from './Invitations/NotificationInvitationAccepted';
import NotificationInvitationRefused from './Invitations/NotificationInvitationRefused';

export default function Notification({active} : {active : boolean}) {
    const notificationState = useAppSelector(state => state.notifications);
    useEffect(() => {
        getAllNotification();
        
    }, []);

    const notifications = notificationState.notifications?.data;

    return (
    <div className={'absolute p-4 xl:w-[25%] sm:w-[50%] sm:left-[45%] md:w-[40%] md:left-[58%] xl:left-[74%]  h-[90%] z-40 top-[8%]  bg-white shadow-xl rounded-sm flex  items-start overflow-x-hidden '+(active ? 'block' : 'hidden')}>
    
    <div className='w-full flex flex-col'>
      <div className='text-2xl font-bold'>Notifications</div>

    <div className='mt-8'>
      {notifications ? 
          notifications.map((notification : NotificationInterface) =>   {
           if (notification.type === NotificationEnum.invitation) {
              return <NotificationInvitation notification={notification} />
           }
           if (notification.type === NotificationEnum.invitation_confirmation) {
            return <NotificationInvitationConfirmation notification={notification} />
          }
          if (notification.type === NotificationEnum.invitation_accepted) {
            return <NotificationInvitationAccepted notification={notification} />
          }
          if (notification.type === NotificationEnum.invitation_refused) {
            return <NotificationInvitationRefused notification={notification} />
          }
        })
      : <div className='text-xl'>Not found</div>}

    </div>
    </div>
  </div>
  )
}
