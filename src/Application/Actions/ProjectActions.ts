import { ProjectInterface } from "../../Domain/Entities/project.entities";
import { UserInterface } from "../../Domain/Entities/user.entities";

export const  ProjectActions = {
    GET_PROJECTS_SUCESS : "GET_PROJECTS_SUCESS" ,
    GET_PROJECTS_FAILED : "GET_PROJECTS_FAILED" ,
    CREATE_PROJECTS_FAILED : "CREATE_PROJECTS_FAILED" ,
    CREATE_PROJECTS_SUCESS : "CREATE_PROJECTS_SUCESS" ,
    UPDATE_PROJECTS_SUCESS : "UPDATE_PROJECTS_SUCESS" ,
    UPDATE_PROJECTS_FAILED : "UPDATE_PROJECTS_FAILED" ,
    INIT_PROJECT_UPDATE_STATE : "INIT_PROJECT_UPDATE_STATE",
    INIT_PROJECT_DELETE_STATE : "INIT_PROJECT_DELETE_STATE",
    DELETE_PROJECTS_SUCESS : "DELETE_PROJECTS_SUCESS" ,
    DELETE_PROJECTS_FAILED : "DELETE_PROJECTS_FAILED" ,
    SEARCH_USER_PROJECTS_FAILED : "SEARCH_USER_PROJECTS_FAILED" ,
    SEARCH_USER_PROJECTS_SUCESS : "SEARCH_USER_PROJECTS_SUCESS" ,
    SEND_INVITATION_SUCESS : "SEND_INVITATION_SUCESS",
    SEND_INVITATION_FAILED : "SEND_INVITATION_FAILED",
    INIT_INVITATION_STATUS : "INIT_INVITATION_STATUS",
    ACCEPT_PROJECT_INVITATION_SUCESS :  "ACCEPT_PROJECT_INVITATION_SUCESS",
    ACCEPT_PROJECT_INVITATION_FAILED :  "ACCEPT_PROJECT_INVITATION_FAILED",
    INIT_PROJECT_INVITATION :  "INIT_PROJECT_INVITATION",
    REFUSE_PROJECT_INVITATION_SUCESS :  "REFUSE_PROJECT_INVITATION_SUCESS",
    REFUSE_PROJECT_INVITATION_FAILED :  "REFUSE_PROJECT_INVITATION_FAILED",
    INIT_REFUSE_PROJECT_INVITATION :  "INIT_REFUSE_PROJECT_INVITATION",

}


export const getProjectSucess = (projects : ProjectInterface, count : number) => ({
    type : ProjectActions.GET_PROJECTS_SUCESS,
    payload : {projects : projects, count : count}
});


export const getProjectFailed = (errors : string) => ({
    type : ProjectActions.GET_PROJECTS_FAILED,
    payload : {errors : errors}
});


export const SearchUserProjectSucess = (users : UserInterface) => ({
    type : ProjectActions.SEARCH_USER_PROJECTS_SUCESS,
    payload : {users : users}
})


export const SearchUserProjectFailed = (error : string) => ({
    type : ProjectActions.SEARCH_USER_PROJECTS_FAILED,
    payload : {error : error}
})


export const CreateProjectSucess = (status : number) => ({
    type : ProjectActions.CREATE_PROJECTS_SUCESS,
    payload : {status : status}
})


export const CreateProjectFailed = (status : number) => ({
    type : ProjectActions.CREATE_PROJECTS_FAILED,
    payload : {status : status}
})


export const SendInvitationSucess = (user_id:number, project_id : number, status : number) => ({
    type : ProjectActions.SEND_INVITATION_SUCESS,
    payload : {status : status, user_id : user_id, project_id : project_id}
})


export const SendInvitationFailed = (user_id:number, project_id : number,  status : number) => ({
    type : ProjectActions.SEND_INVITATION_FAILED,
    payload : {status : status, user_id : user_id, project_id : project_id}

});


export const InitInvitationStatus = () => ({
    type : ProjectActions.INIT_INVITATION_STATUS,
});




export const AcceptProjectInvitationSucess = (uuid : string|number) => ({
    type : ProjectActions.ACCEPT_PROJECT_INVITATION_SUCESS,
    payload : {uuid : uuid}
})


export const AcceptProjectInvitationFailed = () => ({
    type : ProjectActions.ACCEPT_PROJECT_INVITATION_FAILED,
    payload : {error : true}
})

export const iniProjectInvitattionStatus = () => ({
    type : ProjectActions.INIT_PROJECT_INVITATION,
})


export const RefuseProjectInvitationSucess = (uuid : string|number) => ({
    type : ProjectActions.REFUSE_PROJECT_INVITATION_SUCESS,
    payload : {uuid : uuid}
})


export const RefuseProjectInvitationFailed = () => ({
    type : ProjectActions.REFUSE_PROJECT_INVITATION_FAILED,
    payload : {error : true}
});

export const inirefuseProjectInvitattionStatus = () => ({
    type : ProjectActions.INIT_REFUSE_PROJECT_INVITATION,
})


export const updateProjectSuccess  =  () => ({
    type : ProjectActions.UPDATE_PROJECTS_SUCESS,
    payload : {status : true}
});


export const updateProjectFailed  =  () => ({
    type : ProjectActions.UPDATE_PROJECTS_FAILED,
    payload : {status : false}
});


export const InitProjectUpdateState  =  () => ({
    type : ProjectActions.INIT_PROJECT_UPDATE_STATE,
});


export const deleteProjectSuccess  =  () => ({
    type : ProjectActions.DELETE_PROJECTS_SUCESS,
    payload : {status : true}
});


export const deleteProjectFailed  =  () => ({
    type : ProjectActions.DELETE_PROJECTS_FAILED,
    payload : {status : false}
});


export const InitProjectDeleteState  =  () => ({
    type : ProjectActions.INIT_PROJECT_DELETE_STATE,
});