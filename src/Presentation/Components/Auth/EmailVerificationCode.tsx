import React, { Dispatch, SetStateAction } from 'react'
import { motion } from "framer-motion"
import Icon from '@mdi/react'
import {  mdiArrowRight } from '@mdi/js'
import AlertSucess from '../Alert/AlertSucess'
import { useNavigate, useSearchParams } from 'react-router-dom'
import secureLocalStorage from 'react-secure-storage'


export default function EmailVerificationCode({ isVisible, setIsVisisble }: { isVisible: boolean, setIsVisisble : Dispatch<SetStateAction<boolean>>}) {

    let [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const backToLogin = () => {
        secureLocalStorage.clear();
        setIsVisisble(false);
        navigate('/');
    }

  return (
    <motion.div className="modal-box"  animate={{y:  isVisible ? 0 : 200, display:  isVisible ? 'block' : 'none'  }}>

    <div className='flex flex-row items-center'>
            <motion.a href='#'  whileTap={{ scale: 0.8 }}  onClick={() => backToLogin()} className='border-2 mr-4	border-inherit	p-2 shadow-xl rounded-lg'>
               <Icon 
               path={mdiArrowRight}
               title="back space"
               size={1}
               horizontal
               vertical
               color="gray"
               
               />

            </motion.a >
            <h3 className="font-bold text-xl">Email Verification</h3>
            
        </div>

        <AlertSucess classStyle={'mt-4'} text='Code has bee sent to the email, please check your email and fill it to continue' />
    
    <form method="dialog " className='lg:ml-8 md:ml-8'>
    <div className='form-group flex flex-col w-full my-4'>
        
        <label htmlFor='email' className='mb-2'>Code</label>
        <input type="email" id='email' placeholder="Enter your verification code" className="input input-bordered w-full " />
    </div>
    
    <div className="modal-action flex flex-col">
        
        <button className="btn btn-primary w-full">Continue</button>
    </div>
    </form>
</motion.div>
  )
}
