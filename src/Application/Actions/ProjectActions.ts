import { ProjectInterface } from "../../Domain/Entities/project.entities";

export const  ProjectActions = {
    GET_PROJECTS_SUCESS : "GET_PROJECTS_SUCESS" ,
    GET_PROJECTS_FAILED : "GET_PROJECTS_FAILED" ,
}


export const getProjectSucess = (projects : ProjectInterface, count : number) => ({
    type : ProjectActions.GET_PROJECTS_SUCESS,
    payload : {projects : projects, count : count}
});

export const getProjectFailed = (errors : string) => ({
    type : ProjectActions.GET_PROJECTS_FAILED,
    payload : {errors : errors}
});




