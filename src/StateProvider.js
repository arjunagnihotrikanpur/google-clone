import React, {createContext, CreateContext, useContext, useReducer} from "react";

// Prepare Data Layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// Hook which allows us to pull information from data layer
export const useStateValue = () => useContext(StateContext);