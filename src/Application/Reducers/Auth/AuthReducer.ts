import { ActionInterface } from "../../../Domain/Entities/actions.entities";
import { LoginActions } from "../../Actions/Auth/LoginActions";
import { RegisterActions } from "../../Actions/Auth/RegisterActions";

export const initialState = {
    name: "auth",
    login_errors : false,
    login_message : null,
    register_errors : false,
    register_message : null,
    resetPasswordStatus : false,
    resetPasswordError : null,
    sendCodeResetPasswordError : false,
}


const  AuthReducer = (state = initialState, action : ActionInterface) => {
    switch (action.type) {
    case LoginActions.LOGIN_USER_FAILED :
        return {...state, login_message : action.payload.error, login_errors : true}
    case RegisterActions.REGISTER_USER_FAILED :
            return {...state, register_message : action.payload.error, register_errors : true}
    default:
        return {...state};
    }

};

export default AuthReducer;