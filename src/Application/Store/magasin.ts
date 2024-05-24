import { combineReducers, } from "redux"
import ColorsReducer from "../Reducers/ColorsReducer";
import AuthReducer from "../Reducers/Auth/AuthReducer";
import ProjectsReducer from "../Reducers/Project/ProjectsReducer";
import ProjectUserSearchReducer from "../Reducers/Project/ProjectUserSearchReducer";
import NotificationReducer from "../Reducers/NotificationReducer";

 const RootReducer = 
    combineReducers({
        colorsPackage: ColorsReducer,
        auth : AuthReducer,
        projects : ProjectsReducer,
        projectUserSearch : ProjectUserSearchReducer,
        notifications : NotificationReducer
    });


export default RootReducer;