import { ActionInterface } from "../../Domain/Entities/actions.entities";
import { colors } from "../../data/color";
import { ColorsActions } from "../Actions/ColorsActions";

const initialState = {
    colors : [
        "#ef4444",
       "#f97316",
        "#c026d3",
        "#4c0519",
        "#475569",
        "#db2777",
       "#fde047",
        "#a16207",
   ]
}


const  ColorsReducer = (state = initialState, action : ActionInterface) => {
    switch (action.type) {
    case ColorsActions.CHANGE_COLORS_PACKAGE : 
        return {colors : action.payload.colors}
    default:
        return {...state};
    }
};

export default ColorsReducer;