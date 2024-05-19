import secureLocalStorage from "react-secure-storage";
import { handleLogin } from "../../../Application/Helpers/Actions";
import ApiClient from "../../../Application/Helpers/ApiClient";
import toast from "react-hot-toast";
import { setCookie } from "react-use-cookie";
import { store } from "../../../Application/Store/store";
import { loginUserFailed } from "../../../Application/Actions/Auth/LoginActions";

export const LoginService = async (email : String, password : String) => {
     ApiClient().post('/auth/login',  
    {
        'email' : email,
        'password' : password,
    },
    )
    .then((response) => {
        const res = response.data;
        if (response.status === 200) {
            const token = res.data.token.access_token;
            const user = res.data.user;
           handleLogin(token, user);
           secureLocalStorage.setItem('connexion_greetings', 'true');
           console.log(secureLocalStorage.getItem('connexion_greetings'));
           window.location.reload(); 
        }   
    }).catch((e) => { 
        console.log(e.response.status);
        store.dispatch(loginUserFailed('Credentials do not match our records.'));
    })   
    
};
