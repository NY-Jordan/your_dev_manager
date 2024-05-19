import { combineReducers, } from "redux"
import ColorsReducer from "../Reducers/ColorsReducer";
import AuthReducer from "../Reducers/Auth/AuthReducer";
import ProjectsReducer from "../Reducers/ProjectsReducer";

 const RootReducer = 
    combineReducers({
        colorsPackage: ColorsReducer,
        auth : AuthReducer,
        projects : ProjectsReducer
    });


export default RootReducer;