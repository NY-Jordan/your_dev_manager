import React, { useEffect, useState } from 'react'
import { NotificationInterface } from '../../../../Domain/Entities/notifications.entities'
import { ProjectInvitationInterface } from '../../../../Domain/Entities/project.entities'
import { getProjectInvitation } from '../../../../Infrastructure/Services/ProjectService'


const defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3FoTTUAqf4eBIuMo4rE45GWh-TjwI66eSUA&usqp=CAU'

export default function NotificationInvitation({notification} : { notification: NotificationInterface}) {

  const [invitation, setInvitation] = useState<ProjectInvitationInterface|null>()

  useEffect(() => {
    async function getInvitation() {
      const user  = await getProjectInvitation(notification.notifiable_contentt_id)
      setInvitation(user);
    }
    getInvitation();
  
  },[]);

  
  return (
    <>
    {
      invitation && <>
          <div className='my-2 flex space-x-2 hover:bg-slate-200 p-2'>
          <div  className="btn btn-ghost btn-circle avatar w-18">
            <div className=" rounded-full">
              <img alt="Tailwind CSS Navbar component"  src={defaultImage} />
            </div>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-sm'> 
            You have successfully invited 
            <strong> {invitation.receiver.username} </strong>
            to join the 
          <strong> {invitation.project.name} </strong> project</p>
          </div>
      </div>
      <div className='divider'></div> 
  </>
    }

    </>
    
  )
}
