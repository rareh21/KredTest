const commentReducer = (state = "", action) => {
    switch(action.type) {
        case "Commented" :
            return action.payload;
        
        default:
            return state;
    }
}

export default commentReducer;