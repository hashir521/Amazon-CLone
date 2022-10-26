import React,{createContext,useContext,useReducer} from "react";

// prepare the data layer
export const StateContext = createContext();

// wrap our app and provide the data layer

export const StateProvider = ({reducer,initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)
//const[state,dispatch] = useReducer(reducer,initialState)
// const StateProvider = ({}) => ()

// pull the date/info from data layer
export const useStateValue = () => useContext(StateContext);