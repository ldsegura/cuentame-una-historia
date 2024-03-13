import React from "react";
import { useReducer, useContext, createContext } from "react";
import initialState from "./initialState";
import rootReducer from "./rootReducer";

//@ts-ignore
const StoreContext = createContext();

const StoreProvider = ({ children }: { children: any }) => (
  <StoreContext.Provider value={useReducer(rootReducer, initialState)}>
    {children}
  </StoreContext.Provider>
);

//@ts-ignore
const useSelector = () => useContext(StoreContext)[0]; //store
//@ts-ignore
const useDispatch = () => useContext(StoreContext)[1]; //dispatch

export { StoreContext, useSelector, useDispatch };
export default StoreProvider;
