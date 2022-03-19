
const initialState = {
 autos: [],
}


const autoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INIT-AUTO":
            return{ ...state, autos: action.payload }
        case "ADD-AUTO": 
        return {...state, autos: [...state.autos, action.payload] }
        case 'EDIT-AUTO':
            return { ...state, [state.autos.make]: action.payload  }
    case 'DELETE-AUTO': {
      return {
        ...state,
        autos: state.autos.filter((make) => make.id !== action.payload),
      }
    }
        default:
            return state
    }
}

export default autoReducer