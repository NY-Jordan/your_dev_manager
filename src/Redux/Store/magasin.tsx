import { combineReducers, } from "redux"
import ColorsReducer from "../Reducers/ColorsReducer";

 const RootReducer = 
    combineReducers({
        colorsPackage: ColorsReducer,
    });


export default RootReducer;