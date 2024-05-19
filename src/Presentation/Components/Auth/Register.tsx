import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { SubmitHandler, useForm } from 'react-hook-form'
import AlertError from '../Alert/AlertError'
import { useAppSelector } from '../../../Application/Store/hook'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import secureLocalStorage from 'react-secure-storage'
import { RegisterService } from '../../../Infrastructure/Services/Auth/RegisterService'


type Inputs = {
    username : string,
    email: string,
    password : string, 
    confirm_password: string
  }


export default function Register({ isVisible, setIsVisisble }: { isVisible: boolean , setIsVisisble : Dispatch<SetStateAction<boolean>>}) {
   
    const [confirmPasswordErrors, setConfirmPasswordErrors] = useState<boolean|string>(false);
    const auth = useAppSelector((state) => state.auth);
    const [loader, setLoader] = useState<boolean>(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        setLoader(true);
        console.log(data);
        if (data.confirm_password !== data.password) {
            setConfirmPasswordErrors('Confirm password it is not correct');
            setLoader(false);
            return;
        }
        RegisterService(data.email, data.password, data.username);
    }

    useEffect(()=>{
        console.log('ici');
        
        if (secureLocalStorage.getItem('limited_token')) {
            console.log('ici2');
            navigate("/?auth=email_verification");
        }
      }, [secureLocalStorage.getItem('limited_token')])
    

  return (
    <motion.div className="modal-box overflow-y-hidden	"  animate={{x:  isVisible ? 0 : -200, display:  isVisible ? 'block' : 'none'  }}>
    <h3 className="font-bold text-xl">Register</h3>

    {auth.register_errors && <AlertError text={auth.register_message} />}

    <form method="dialog " onSubmit={handleSubmit(onSubmit)} className='lg:ml-16 md:ml-8 overflow-hidden'>
    <div className='form-group flex flex-col w-full my-4'>
        <label htmlFor='username' className='mb-2'>Username</label>
        <input type="text" id='username' placeholder="Your UserName" className={"input input-bordered w-full focus-within:outline-none "+((errors.username) ? 'input-secondary' : '')}
        {...register("username", { required: true })}
         />
    </div>
    <div className='form-group flex flex-col w-full my-4'>
        <label htmlFor='email' className='mb-2'>Email</label>
        <input type="email" id='email' placeholder="Your email" className={"input input-bordered w-full focus-within:outline-none "+((errors.email) ? 'input-secondary' : '')}
        {...register("email", { required: true })}
         />
    </div>
    <div className='form-group flex flex-col w-full my-4'>
        <label htmlFor='password' className='mb-2'>Password</label>
        <input type="password" id='password' placeholder="Your password" className={"input input-bordered w-full focus-within:outline-none "+((errors.password) ? 'input-secondary' : '')}
        {...register("password", { required: true })}
        />
    </div>
    <div className='form-group  flex flex-col w-full my-2'>
        <label htmlFor='confirm_password' className='mb-2'>Confirm Password</label>
        <input type="password" id='confirm_password' placeholder="Confirm your password" className={"input input-bordered w-full focus-within:outline-none "+((errors.confirm_password||confirmPasswordErrors) ? 'input-secondary' : '')}
        {...register("confirm_password", { required: true })}
         />
          {confirmPasswordErrors && <span className='text-xs text-red-500 mt-2' >{confirmPasswordErrors}</span>}
    </div>
    <div className="modal-action flex flex-col">
        <div className='w-full flex mb-2'>
           <span className='mr-2'>Already an Account ? </span> <a href='#' onClick={() => setIsVisisble(!isVisible)} className='link link-primary'>Login</a>
        </div>
        <button type='submit' className="btn btn-primary w-full">
            Register
            {loader && <span className="loading loading-infinity loading-md"></span>}
        </button>
    </div>
    </form>
    

</motion.div>
  )
}
