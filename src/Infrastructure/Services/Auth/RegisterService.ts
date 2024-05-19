import secureLocalStorage from "react-secure-storage";
import ApiClient from "../../../Application/Helpers/ApiClient";
import { store } from "../../../Application/Store/store";
import { RegisterUserFailed } from "../../../Application/Actions/Auth/RegisterActions";

export const RegisterService = async (email : string, password : string, name : string ) => {
     ApiClient().post('/auth/register',  
    {
        'name' : name,
        'email' : email,
        'password' : password,
        'picture'  : 'https://img.freepik.com/free-photo/user-profile-icon-front-side_187299-39596.jpg?size=626&ext=jpg&ga=GA1.1.1665549049.1707312326&semt=ais'
    },
    )
    .then((response) => {
        if (response.status === 201) {
            const res = response.data;
            const token = res.data.token.access_token;
            secureLocalStorage.setItem('limited_token', token);
        }   
    }).catch((e) => { 
        if (e.response?.status == 422) {
            store.dispatch(RegisterUserFailed('The email has already been taken.'));
        } else {
            store.dispatch(RegisterUserFailed('Something went wrong'));
        }       
    })   
    
};
