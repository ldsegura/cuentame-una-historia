import { combineReducers } from "redux";
import profile from "./features/profileReducer";

const rootReducer = combineReducers({
    profile
});

export default rootReducer;