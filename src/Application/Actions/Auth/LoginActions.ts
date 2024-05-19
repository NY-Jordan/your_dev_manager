import { UserInterface } from "../../../Domain/Entities/user.entities";

export const  LoginActions = {
    LOGIN_USER_SUCESS : "LOGIN_USER_SUCESS" ,
    LOGIN_USER_FAILED : "LOGIN_USER_SUCESS" ,
}


export const loginUserFailed = (error : string) => ({
    type : LoginActions.LOGIN_USER_FAILED,
    payload : {error : error}
});

export const loginUserSucess = (user : UserInterface) => ({
    type : LoginActions.LOGIN_USER_SUCESS,
    payload : {user : user}
});




