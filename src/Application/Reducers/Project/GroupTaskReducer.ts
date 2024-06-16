import { ActionInterface } from "../../../Domain/Entities/actions.entities";
import { GroupTaskActions } from "../../Actions/GroupTaskActions";

const initialState = {
    create_task_group_status : {
        status : null,
        projectId : null
    },
}


const  GroupTaskReducer = (state = initialState, action : ActionInterface) => {
    switch (action.type) {
        
    case GroupTaskActions.CREATE_GROUP_TASK_SUCESS : 
        return {...state, create_task_group_status : {status : true, projectId : action.payload.projectId}}
    case GroupTaskActions.CREATE_GROUP_TASK_FAILED : 
        return {...state, create_task_group_status : {status : false, projectId : action.payload.projectId}}
    case GroupTaskActions.INIT_CREATE_PROJECTS_STATE : 
        return {...state, create_task_group_status : { status : null, projectId : null}}
    default:
        return {...state};
    }
};

export default GroupTaskReducer;