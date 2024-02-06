const initialState = {
    name: "user",
    user : null,
    token : 0,
    error : false,
}


const  ColorsReducer = (state = initialState, action) => {
    switch (action.type) {
    
    default:
        return {...state};
    }
};

export default ColorsReducer;