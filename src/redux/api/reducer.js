import apiActiontypes from "./action-types";

const initialState = {
    apiData: [null],
}

const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case apiActiontypes.PROFILE:
            
        return { ...state, apiData: action.payload };
        default:
            return state;
    }
}
export default apiReducer;