import { mdiBookEdit, mdiClose, mdiFileEdit, mdiLinkEdit, mdiNoteEdit, mdiPencil, mdiPlus } from '@mdi/js'
import Icon from '@mdi/react'
import React, { useState } from 'react'
import Tag from '../Tag'
import { motion, useDragControls } from "framer-motion"
import ReactHotKey from 'react-shortcut'


export default function AddTask() {
    const controls = useDragControls();
    const [DragListener, setDragListenner] = useState(false)
    const [displayAddTask, setDisplayAddTask] = useState(false)
    const doSomethingOnShortcutPress = () => {
        setDisplayAddTask(true);
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
                <div>
                    <div className='flex flex-row justify-between '>
                            
                            <div >
                                    <div className='link text-sm link-primary'><a href='#'>3 files attached</a></div>
                            </div>
                            <div className='flex flex-row mb-2' >
                                <div className='font-bold  text-blue-500 text-sm mr-2'>Reminder date  : </div>
                                <div className='font-bold   text-sm '> 05 decembre 2023</div>
                                <a href='#'  className='hover:bg-gray-200 ml-2 rounded-xl '>
                                    <Icon
                                    path={mdiPencil}
                                    color={'black'}
                                    size={3/4}
                                    />
                                </a>
                            </div>
                    </div>
                    <div className='flex flex-row justify-between '>
                        <div >
                            <div className='font-bold   text-sm text-blue-400'>Tag(s)</div>
                            </div>
                    </div>
                    <div className='grid mb-6 mt-2  grid-cols-4  gap-2'>
                        <Tag text='back-end'/>
                        <Tag text='front-end' />
                        <Tag text='full-stack' />
                        <Tag text='full-stack' />
                        <Tag text='full-stack' />
                        <Tag text='full-stack' />
                        <Tag text='full-stack' />
                        
                    </div>
                </div>
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

                <div className='flex flex-row justify-between w-full'>
                    <div className='mt-4 flex flex-row items-center space-x-2'>
                        <button className="btn  btn-xs bg-blue-500 btn-square hover:bg-blue-400 rounded-lg	"> 
                        <Icon 
                        path={mdiPlus}
                        color={"white"}
                        size={1}
                        />
                        </button>
                        <p className='text-sm text-blue-800'>Add a tag</p>
                    </div>
                    <div className='mt-4 flex flex-row items-center space-x-2'>
                        <button className="btn  btn-xs bg-blue-500 btn-square hover:bg-blue-400 rounded-lg	"> 
                        <Icon 
                        path={mdiPlus}
                        color={"white"}
                        size={1}
                        />
                        </button>
                        <p className='text-sm text-blue-800'>Add a reminder date</p>
                    </div>
                    <div className='mt-4 flex flex-row items-center space-x-2'>
                        <button className="btn  btn-xs bg-blue-500 btn-square hover:bg-blue-400 rounded-lg	"> 
                        <Icon 
                        path={mdiFileEdit}
                        color={"white"}
                        size={1}
                        />
                        </button>
                        <p className='text-sm text-blue-800'>Attach a file</p>
                    </div>
                </div>
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
