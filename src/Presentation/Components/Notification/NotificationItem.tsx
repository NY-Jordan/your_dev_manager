import React from 'react'

export default function NotificationItem({reponse, image} : {reponse? : boolean, image? : string}) {
    const defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3FoTTUAqf4eBIuMo4rE45GWh-TjwI66eSUA&usqp=CAU'
  return (
    <>
    <div className='my-2 flex space-x-2 hover:bg-slate-200 p-2'>
          <div  className="btn btn-ghost btn-circle avatar w-18">
            <div className=" rounded-full">
              <img alt="Tailwind CSS Navbar component"  src={image ? image : defaultImage} />
            </div>
          </div>
          <div className='flex flex-col'>
            <p className='text-sm'> <strong>Yvan Jordan Nguetse </strong>
            viens de vous inviter a rejoindre le projet  
           <strong> DevHandle</strong> </p>
          {reponse && <div className='flex space-x-3 mt-2 px-3'>
            <button className='w-1/2 btn btn-secondary btn-sm'>join</button>
            <button className='w-1/2 btn btn-neutral btn-sm'>refuse</button>
          </div>}
          </div>
      </div>
      <div className='divider'></div>

    </>
    
  )
}
