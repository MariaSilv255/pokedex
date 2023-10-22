
const initialState = {
    apiData: null,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'pokemon/profile':
            
        return { ...state, apiData: action.payload };
        default:
            return state;
    }
}
export default userReducer;