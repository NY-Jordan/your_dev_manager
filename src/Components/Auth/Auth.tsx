import React, { useState } from 'react'
import facebook from './../../assets/img/facebook.png'
import google from './../../assets/img/google.png'
import { motion } from "framer-motion"
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';

export default function Auth() {
    const [isVisible, setVisible] = useState(false);
    const [forgotPassword, setForgotPassword] = useState(false);
  return (
    <div>
        <dialog id="my_modal_1" className="modal backdrop-blur-sm">
            <Login 
                isVisible={isVisible} 
                setIsVisisble={setVisible} 
                forgotPassword={forgotPassword} 
                setForgotPassword={setForgotPassword} 
            />
            <Register isVisible={isVisible} setIsVisisble={setVisible} />
            <ForgotPassword isVisible={forgotPassword} setIsVisisble={setForgotPassword} />
        </dialog>
    </div>
  )
}
