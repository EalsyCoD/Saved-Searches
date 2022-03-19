
const initialState = {
 autos: [],
}


const autoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INIT-AUTO":
            return{ ...state, autos: action.payload }
        case "ADD-AUTO": 
        return {...state, autos: [...state.autos, action.payload] }
        case 'UPDATE-AUTO':
      return {
        ...state,
        autos: state.tasks.map((make) =>
          make.id === action.payload
            ? { ...make, completed: !make.completed }
            : make
        ),
      }
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