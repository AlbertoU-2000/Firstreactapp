import React, {useReducer} from 'react';
import { UtenteContext } from '../cotenexts/utente.context';
import { counterReducer } from '../reducers/utente.reducer';

export const UtenteProvider = ({children}) => {
    const [utenteState, dispach] = useReducer(counterReducer,{})

    return (
        <UtenteContext.Provider value = {(utenteState, dispach)}>
            {children} 
        </UtenteContext.Provider>
    )
}