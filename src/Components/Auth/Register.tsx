import React, { Dispatch, SetStateAction } from 'react'
import { motion } from "framer-motion"
import facebook from './../../assets/img/facebook.png'
import google from './../../assets/img/google.png'

export default function Register({ isVisible, setIsVisisble }: { isVisible: boolean , setIsVisisble : Dispatch<SetStateAction<boolean>>}) {
  return (
    <motion.div className="modal-box overflow-y-hidden	"  animate={{x:  isVisible ? 0 : -200, display:  isVisible ? 'block' : 'none'  }}>
    <h3 className="font-bold text-xl">Register</h3>
    <form method="dialog " className='lg:ml-16 md:ml-8 overflow-hidden'>
    <div className='form-group flex flex-col w-full my-4'>
        <label htmlFor='email' className='mb-2'>Username</label>
        <input type="email" id='email' placeholder="Your UserName" className="input input-bordered w-full " />
    </div>
    <div className='form-group flex flex-col w-full my-4'>
        <label htmlFor='email' className='mb-2'>Email</label>
        <input type="email" id='email' placeholder="Your email" className="input input-bordered w-full " />
    </div>
    <div className='form-group flex flex-col w-full my-4'>
        <label htmlFor='email' className='mb-2'>Password</label>
        <input type="password" id='email' placeholder="Your password" className="input input-bordered w-full " />
    </div>
    <div className='form-group  flex flex-col w-full my-2'>
        <label htmlFor='password' className='mb-2'>Confirm Password</label>
        <input type="password" id='password' placeholder="Confirm your password" className="input input-bordered w-full " />
    </div>
    <div className="modal-action flex flex-col">
        <div className='w-full flex mb-2'>
           <span className='mr-2'>Already an Account ? </span> <a href='#' onClick={() => setIsVisisble(!isVisible)} className='link link-primary'>Login</a>
        </div>
        <button className="btn btn-primary w-full">Continue</button>
    </div>
    </form>
    

</motion.div>
  )
}
