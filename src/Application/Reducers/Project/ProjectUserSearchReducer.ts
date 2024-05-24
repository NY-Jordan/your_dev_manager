import { ActionInterface } from "../../../Domain/Entities/actions.entities";
import { ProjectActions } from "../../Actions/ProjectActions";

const initialState = {
    users : [],
    errors: false,
    message : ''
}


const  ProjectUserSearchReducer = (state = initialState, action : ActionInterface) => {
    switch (action.type) {
        case ProjectActions.SEARCH_USER_PROJECTS_SUCESS : 
            return {...state, users : action.payload.users}
        case ProjectActions.SEARCH_USER_PROJECTS_FAILED : 
            return {...state, errors_search : true}
    default:
        return {...state};
    }
};

export default ProjectUserSearchReducer;