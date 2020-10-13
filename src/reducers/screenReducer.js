const screenReducer = (state = "", action) => {
    switch(action.type) {
        case 'screen' :
            return action.payload;
        default:
            return state;
    }
}

export default screenReducer;