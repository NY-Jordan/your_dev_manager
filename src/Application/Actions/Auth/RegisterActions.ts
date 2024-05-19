export const  RegisterActions = {
    REGISTER_USER_SUCESS : "REGISTER_USER_SUCESS" ,
    REGISTER_USER_FAILED : "REGISTER_USER_FAILED" ,
}


export const RegisterUserFailed = (error : string) => ({
    type : RegisterActions.REGISTER_USER_FAILED,
    payload : {error : error}
});





