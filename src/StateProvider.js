import React, {createContext, useContext, useReducer} from 'react'

export const StateContext = createContext();

//children is <App />
export const StateProvider = ({reducer, initialState, children}) => (
    //set up data layer
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//allow to pull data from data layer
export const useStateValue = () => useContext(StateContext);
