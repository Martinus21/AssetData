const initialState = {
    user: ""
};

const reducer = ((state = initialState, action) => {
    let { type, data } = action;
    switch (type) {
        case "SET_AUTH": 
            return {
                ...state,
                ...data
            }
        case "CLEAR_USER":
            return {
                ...state,
                user: ""
            }
        default : 
            return state;
    }
})

export default reducer;