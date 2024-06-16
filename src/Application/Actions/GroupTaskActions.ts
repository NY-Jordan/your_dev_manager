import { ProjectInterface } from "../../Domain/Entities/project.entities";
import { UserInterface } from "../../Domain/Entities/user.entities";

export const  GroupTaskActions = {
    CREATE_GROUP_TASK_FAILED : "CREATE_GROUP_TASK_FAILED" ,
    CREATE_GROUP_TASK_SUCESS : "CREATE_GROUP_TASK_SUCESS" ,
    INIT_CREATE_PROJECTS_STATE : "INIT_CREATE_PROJECTS_STATE" ,
}


export const createGroupTaskSucess = (projectId : number) => ({
    type : GroupTaskActions.CREATE_GROUP_TASK_SUCESS,
    payload : {status : true, projectId : projectId}
});

export const createGroupTaskFailed = (projectId : number) => ({
    type : GroupTaskActions.CREATE_GROUP_TASK_FAILED,
    payload : {status : true,  projectId : projectId}
});

export const initGroupTaskState = () => ({
    type : GroupTaskActions.INIT_CREATE_PROJECTS_STATE,
});