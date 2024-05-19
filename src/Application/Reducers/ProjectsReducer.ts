import { ActionInterface } from "../../Domain/Entities/actions.entities";
import { ProjectActions } from "../Actions/ProjectActions";

const initialState = {
    count  : 0,
    projects : [],
    errors : false,
    message :  '',
}


const  ProjectsReducer = (state = initialState, action : ActionInterface) => {
    switch (action.type) {
    case ProjectActions.GET_PROJECTS_SUCESS : 
        return {...state, projects : action.payload.projects, count : action.payload.count}
    case ProjectActions.GET_PROJECTS_FAILED : 
        return {...state,errors : true, message : action.payload.errors}
    default:
        return {...state};
    }
};

export default ProjectsReducer;