import React, { useEffect } from 'react'
import NotificationItem from './NotificationItem'
import { useAppSelector } from '../../../Application/Store/hook'
import { NotificationInterface } from '../../../Domain/Entities/notifications.entities';
import { getAllNotification } from '../../../Infrastructure/Services/NotificationService';

export default function Notification({active} : {active : boolean}) {
    const notificationState = useAppSelector(state => state.notifications);
    useEffect(() => {
        getAllNotification();
        
    }, []);

    console.log(notificationState);
        
  return (
    <div className={'absolute p-4 xl:w-[25%] sm:w-[50%] sm:left-[45%] md:w-[40%] md:left-[58%] xl:left-[74%]  h-[90%] z-40 top-[8%]  bg-white shadow-xl rounded-sm flex  items-start overflow-x-hidden '+(active ? 'block' : 'hidden')}>
    
    <div className='w-full flex flex-col'>
      <div className='text-2xl font-bold'>Notifications</div>

    <div className='mt-8'>
      {notificationState.notifications ? 

        notificationState.notifications.map((notification : NotificationInterface) => {
            <NotificationItem />
        })
      : <div className='text-xl'>Not found</div>}

    </div>
    </div>
  </div>
  )
}
