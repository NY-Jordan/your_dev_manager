import React, { Dispatch, SetStateAction } from 'react'
import { motion } from "framer-motion"
import facebook from './../../assets/img/facebook.png'
import google from './../../assets/img/google.png'

type props = {
    isVisible: boolean, 
    forgotPassword  : boolean,
    setIsVisisble : Dispatch<SetStateAction<boolean>>,
    setForgotPassword : Dispatch<SetStateAction<boolean>>
}
 

export default function Login({ isVisible, setIsVisisble, forgotPassword, setForgotPassword }: props) {
  return (
    <motion.div className="modal-box"  animate={{x:  (isVisible == true && forgotPassword == false) ? 200 : 0, display:  (isVisible == false && forgotPassword == false) ? 'block' : 'none'  }}>
    <h3 className="font-bold text-xl">Login</h3>
    <form method="dialog " className='lg:ml-8 md:ml-8'>
    <div className='form-group flex flex-col w-full my-4'>
        <label htmlFor='email' className='mb-2'>Email</label>
        <input type="email" id='email' placeholder="Your email" className="input input-bordered w-full " />
    </div>
    <div className='form-group  flex flex-col w-full my-2'>
        <label htmlFor='password' className='mb-2'>Password</label>
        <input type="password" id='password' placeholder="Type here" className="input input-bordered w-full " />
    </div>
    <div className="modal-action flex flex-col">
        <div className='w-full flex justify-between mb-2'>
            <div>
                <span>You dont have an Account ? </span>
            <a href='#' onClick={() => setIsVisisble(!isVisible)} className='link link-primary'>register</a>
            </div>
            <a href='#' onClick={() => setForgotPassword(!forgotPassword)} className='link link-secondary'>forgot password</a>
        </div>
        <button className="btn btn-primary w-full">Continue</button>
    </div>
    </form>
    <div className="divider">OR</div>
    <div className='flex justify-center '>
    <a href='#' className='px-4'>
        <img src={facebook} width={50}  />
    </a>
    <a href='#' className='px-4'>
        <img src={google} width={50}  />
    </a>
    </div>

</motion.div>
  )
}
