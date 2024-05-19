import React, { Dispatch, SetStateAction, useState } from 'react'
import { motion } from "framer-motion"
import facebook from './../../../assets/img/facebook.png'
import google from './../../../assets/img/google.png'
import { SubmitHandler, useForm } from 'react-hook-form'
import { handleLogin } from '../../../Application/Helpers/Actions'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../../Application/Store/hook'
import EmailVerificationCode from './EmailVerificationCode'
import { LoginService } from '../../../Infrastructure/Services/Auth/LoginService'

type props = {
    isVisible: boolean, 
    forgotPassword  : boolean,
    EmailVerification : boolean,
    setIsVisisble : Dispatch<SetStateAction<boolean>>,
    setForgotPassword : Dispatch<SetStateAction<boolean>>
}
 
type Inputs = {
    email: string
    password: string
  }

export default function Login({ isVisible, setIsVisisble, forgotPassword, setForgotPassword, EmailVerification }: props) {
    
      
     const [loader, setLoader] = useState<boolean>(false);
     const auth = useAppSelector((state) => state.auth);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()



    const onSubmit: SubmitHandler<Inputs> = (data) => {
        setLoader(true);
        LoginService(data.email, data.password);
    }

  return (
    <motion.div className="modal-box"  animate={{x:  (isVisible == true && forgotPassword == false && EmailVerification == false) ? 200 : 0, display:  (isVisible == false && forgotPassword == false  && EmailVerification == false) ? 'block' : 'none'  }}>
    <h3 className="font-bold text-xl">Login</h3>
    <form method="dialog "  onSubmit={handleSubmit(onSubmit)} className='lg:ml-8 md:ml-8'>
    <div className='form-group flex flex-col w-full my-4'>
        <label htmlFor='email' className='mb-2'>Email</label>
        <input type="email" id='email' placeholder="Your email" className={"input input-bordered w-full "+((errors.email||auth.login_errors) ? 'input-secondary' : '')}
        {...register("email", { required: true })}
        aria-invalid={errors.email ? "true" : "false"}
         />
         {auth.login_errors && <span className='text-xs text-red-500 mt-2' >{auth.login_message}</span>}
    </div>
    <div className='form-group  flex flex-col w-full my-2'>
        <label htmlFor='password' className='mb-2'>Password</label>
        <input type="password" id='password' placeholder="Type here" className={"input input-bordered w-full "+((errors.email||auth.login_errors)  ? 'input-secondary' : '')} 
        {...register("password", { required: true })}
        />
        {auth.login_errors && <span className='text-xs text-red-500 mt-2'>{auth.login_message}</span>}
    </div>
    <div className="modal-action flex flex-col">
        <div className='w-full flex justify-between mb-2'>
            <div>
                <span>You dont have an Account ? </span>
            <a href='#' onClick={() => setIsVisisble(!isVisible)} className='link link-primary'>register</a>
            </div>
            <a href='#' onClick={() => setForgotPassword(!forgotPassword)} className='link link-secondary'>forgot password</a>
        </div>
        <button className="btn btn-primary w-full">
            Continue 
            {loader && <span className="loading loading-infinity loading-md"></span>
}
        </button>
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
