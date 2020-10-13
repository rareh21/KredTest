const nameReducer = (state = "", action) => {
    switch(action.type) {
        case 'name' :
            return action.payload;
        default:
            return state;
    }
}

export default nameReducer;