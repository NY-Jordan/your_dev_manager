import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import EmailVerificationCode from './EmailVerificationCode';
import { redirect, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';
import toast from 'react-hot-toast';
import { getCookie } from 'react-use-cookie';

export default function Auth() {
    const userToken = getCookie('token');
    let [searchParams, setSearchParams] = useSearchParams();
    let [limitedToken, setLimitedToken] = useState<string | number | boolean | object | null>(secureLocalStorage.getItem('limited_token'));
    const [isAuth, setIsAuth] = useState<boolean>(true)
    const [isVisible, setVisible] = useState(false);
    const [forgotPassword, setForgotPassword] = useState(false);
    const [emailVerification, setEmailVerification] = useState<boolean>((searchParams.get('auth') && limitedToken)? true : false);
    const navigate = useNavigate();
    useEffect(()=>{
      if (limitedToken) {
        navigate("/?auth=email_verification");
      }
      
    }, []);


    useEffect(() => {
      if (!userToken) {
        setIsAuth(false);
      }
      if (secureLocalStorage.getItem('connexion_greetings')) {
        toast.success('Good to see you', {
          duration: 4000,
          icon: '👋🏼',});
        secureLocalStorage.removeItem('connexion_greetings');
      }
    }, []) 


  return (
    <div >
      <input type="checkbox" id="my_modal_6" checked={!isAuth}  className="modal-toggle" />
        <dialog id="my_modal_6" className="modal backdrop-blur-sm">
            <Login 
                isVisible={isVisible} 
                setIsVisisble={setVisible} 
                forgotPassword={forgotPassword} 
                EmailVerification={emailVerification}
                setForgotPassword={setForgotPassword} 
            />
            <EmailVerificationCode 
            isVisible={emailVerification}
            setIsVisisble={setEmailVerification}
            />
            <Register isVisible={isVisible} setIsVisisble={setVisible} />

            <ForgotPassword isVisible={forgotPassword} setIsVisisble={setForgotPassword} />
        </dialog>
    </div>
  )
}
