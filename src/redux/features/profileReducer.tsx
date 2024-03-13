import initialState from "../initialState";
import types from "../../constants/reducers/profileReducerConstants";

const profileReducer = (state = initialState.profile, action: any) => {
  switch (action.type) {
    case types.PROFILE_FETCHING:
    case types.PROFILE:
    case types.PROFILE_ERROR:
      return { ...initialState.profile, ...action.profile };
    case types.PROFILE_RESET:
      return initialState.profile;
    default:
      return state;
  }
};

export default profileReducer;
