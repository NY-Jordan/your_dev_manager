import { mdiBookEdit, mdiClose, mdiFileEdit, mdiLinkEdit, mdiNoteEdit, mdiPencil, mdiPlus } from '@mdi/js'
import Icon from '@mdi/react'
import React, { useState } from 'react'
import Tag from '../Tag'
import { motion, useDragControls } from "framer-motion"
import ReactHotKey from 'react-shortcut'
import AddTaskDetails from './AddTaskDetails'
import AddTaskTools from './AddTaskTools'
import ReminderDateModal from '../AddTask/ReminderDateModal'
import FilesAttachedModal from '../AddTask/FilesAttachedModal'


export default function AddTask() {
    const controls = useDragControls();
    const [DragListener, setDragListenner] = useState(false)
    const [displayAddTask, setDisplayAddTask] = useState(false)
    const doSomethingOnShortcutPress = () => {
        setDisplayAddTask(!displayAddTask);
    }
  return (
    <>
    <motion.div  
        animate={{cursor : DragListener ? "pointer" : "", display : displayAddTask ? "block" : 'none' }}
        onMouseLeave={() => setDragListenner(false)} 
        onMouseDown={() => setDragListenner(true)}  
        drag 
        dragListener={DragListener} 
        dragControls={controls} 
        className="absolute  z-[100] border-2 shadow-xl bg-white rounded-b-xl" style={{ top : "12%",left : "60%", width : "500px" }}>
        <div className='bg-blue-400 p-2  flex flex-row justify-between  items-center rounded-t-xl text-white' >
            <div className='flex flex-row  items-center space-x-2 '>
                <Icon path={mdiFileEdit} size={2} />
                <h5 className='text-lg font-bold'>Add a new Task</h5>
            </div>
            <button className='btn bg-blue-400' onClick={() => setDisplayAddTask(false)}>
                <Icon path={mdiClose} size={1} />
            </button>
        </div>
        <div className='bg-white w-full rounded-b-xl p-2'>
            <form className='px-4 w-full mt-2'>
                {/* start task details */}
                <AddTaskDetails />
                <ReminderDateModal />
                <FilesAttachedModal />
                {/* end task details */}
               {/* start form field */}
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text font-bold">Title of your task? <small className='text-red-800'>*</small></span>
                        <span className="label-text-alt"></span>
                    </div>
                    <input type="text" placeholder="title of the task" className="input input-bordered w-full" />
                    
                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <div>
                            <span className="label-text font-bold">What ? <small className='text-red-800'>*</small></span>
                            <div className='text-red-800 text-xs'>briefy describe for your team</div>
                        </div>
                        <span className="label-text-alt"></span>
                    </div>
                    <input type="text" placeholder="what about the task" className="input input-bordered w-full " />
                    
                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text font-bold">Details <small className='text-red-800'>*</small></span>
                        <span className="label-text-alt"></span>
                    </div>
                    <textarea className="textarea textarea-bordered" placeholder="more details"></textarea>
                    
                </label>
                {/* end form field */}
                {/* start add tools */}

                <AddTaskTools />
                <button className='btn mt-4 hover:bg-blue-400 w-full'>Submit</button>
                {/* end add tools */}
            </form>
           
        </div>
        <div className='bg-blue-400 p-2 py-4  flex flex-row justify-center items-center rounded-b-xl text-white' >
            <p>Create a new task </p>
            <p className='ml-2 text-gray-700 text-sm'> or press  N</p>
        </div>
    </motion.div>
    <ReactHotKey 
    keys='n'
    onKeysPressed={doSomethingOnShortcutPress}
    />
    </>
    
  )
}
