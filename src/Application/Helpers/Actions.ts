import secureLocalStorage from 'react-secure-storage';
import { AES, enc } from 'crypto-js';
import { setCookie } from 'react-use-cookie';
import Cookies from 'js-cookie';
import { UserInterface } from '../../Domain/Entities/user.entities';


 
export async function handleLogin(token : string, user : UserInterface) {
  const encrypt_keys = "ReactDevMANAGERKeys2024@/*!{&##}"
  const  encryptedSessionData = AES.encrypt(token, encrypt_keys).toString();
  setCookie('token',encryptedSessionData, {
    days: 1,
    SameSite: 'Strict',
    Secure: true,
  });
  secureLocalStorage.setItem('token', token) ;
  secureLocalStorage.setItem('user', user) ;
}

export async function logout(){
  Cookies.remove('token');
  secureLocalStorage.clear();
}

export  function getCurrentUser() : object|null {
  const userObject = secureLocalStorage.getItem('user');
   if (typeof userObject === 'object') {
      return   userObject
   }
   return null;
}

export function handleResetPassword(){
  setCookie('reset_password_sucess', 'true', {
    Secure: process.env.NODE_ENV === 'production',
  });
}


