export const initialState = {
    user: null, // null means user not log in
};

//push data into data layer
export const actionTypes = {
    SET_USER: "SET_USER",
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case actionTypes.SET_USER:
            return {
                ...state, //keep the state
                user: action.user, //but change user 
            };
        
        default:
            return state;
    }
};

export default reducer;