import { ProjectInterface } from "../../Domain/Entities/project.entities";
import { UserInterface } from "../../Domain/Entities/user.entities";

export const  ProjectActions = {
    GET_PROJECTS_SUCESS : "GET_PROJECTS_SUCESS" ,
    GET_PROJECTS_FAILED : "GET_PROJECTS_FAILED" ,
    CREATE_PROJECTS_FAILED : "CREATE_PROJECTS_FAILED" ,
    CREATE_PROJECTS_SUCESS : "CREATE_PROJECTS_SUCESS" ,
    SEARCH_USER_PROJECTS_FAILED : "SEARCH_USER_PROJECTS_FAILED" ,
    SEARCH_USER_PROJECTS_SUCESS : "SEARCH_USER_PROJECTS_SUCESS" ,
    SEND_INVITATION_SUCESS : "SEND_INVITATION_SUCESS",
    SEND_INVITATION_FAILED : "SEND_INVITATION_FAILED",
    INIT_INVITATION_STATUS : "INIT_INVITATION_STATUS",
    DELETE_PROJECT_SUCESS : "DELETE_PROJECT_SUCESS",
    DELETE_PROJECT_FAILED : "DELETE_PROJECT_FAILED",
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

export const DeleteProjectSucess = () => ({
    type : ProjectActions.SEND_INVITATION_FAILED,
    payload : {status : true}
});

export const DeleteProjectFailed = () => ({
    type : ProjectActions.SEND_INVITATION_FAILED,
    payload : {error : true}
})








