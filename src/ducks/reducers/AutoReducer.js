
const initialState = {
 autos: [],
}


const autoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INIT-AUTO":
            return{ ...state, auto: action.payload }
        case "ADD-AUTO": 
        return {...state, auto: [...state.autos, action.payload] }
        default:
            return state
    }
}

export default autoReducer