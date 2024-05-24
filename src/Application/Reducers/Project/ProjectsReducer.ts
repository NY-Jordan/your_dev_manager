import { ActionInterface } from "../../../Domain/Entities/actions.entities";
import { ProjectActions } from "../../Actions/ProjectActions";

const initialState = {
    count  : 0,
    projects : [],
    errors : false,
    create_project_status : null,
    delete_project_status : null,
    send_invitation_status : {
        user_id : null,
        project_id : null,
        status : null
    },
    message :  '',
}


const  ProjectsReducer = (state = initialState, action : ActionInterface) => {
    switch (action.type) {
        // get projects
    case ProjectActions.GET_PROJECTS_SUCESS : 
        return {...state, projects : action.payload.projects, count : action.payload.count}

    case ProjectActions.GET_PROJECTS_FAILED : 
        return {...state,errors : true, message : action.payload.errors}
        //create project
    case ProjectActions.CREATE_PROJECTS_SUCESS : 
        return {...state,create_project_status : action.payload.status}

    case ProjectActions.CREATE_PROJECTS_SUCESS : 
        return {...state,create_project_status : action.payload.failed}
        // send invitation
    case ProjectActions.SEND_INVITATION_SUCESS : 
        return {...state,send_invitation_status : { user_id : action.payload.user_id, project_id : action.payload.project_id, status : action.payload.status} }
   
    case ProjectActions.SEND_INVITATION_FAILED : 
        return {...state,send_invitation_status : { user_id : action.payload.user_id, project_id : action.payload.project_id, status : action.payload.status}}
    
    case ProjectActions.INIT_INVITATION_STATUS : 
        return {...state,send_invitation_status : { user_id : null, project_id : null,status : null} }

    case ProjectActions.DELETE_PROJECT_SUCESS : 
        return {...state, delete_project_status : true }

    case ProjectActions.DELETE_PROJECT_FAILED : 
        return {...state, delete_project_status : false }
        
    default:
        return {...state};
    }
};

export default ProjectsReducer;