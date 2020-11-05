import { utentiConstant } from "../costants/utenti.constant"

export function counterReducer(state, action) {
    switch (action.type){
        case utentiConstant.LOGIN:
        return{
        ...state,
        counter:state.counter++
    };

    default:
        return state
    }
}