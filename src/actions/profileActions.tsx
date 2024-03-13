import types from "../constants/reducers/profileReducerConstants";
import profileControllers from "../controllers/profileControllers";

const loading = () => {
  const profile = {
    isFetching: true,
  };
  return {
    type: types.PROFILE_FETCHING,
    profile,
  };
};
const getDispatch = (profile: ISProfile) => {
  profile.complete = true;

  return { type: types.PROFILE, profile };
};

const resetDispatch = () => {
  return { type: types.PROFILE_RESET, profile: {} };
};

const errorDispath = (profile: ISProfile) => {
  profile.error = true;
  return {
    type: types.PROFILE_ERROR,
    profile,
  };
};

const findProfileFromUUID = async (id: string | undefined, dispatch: any) => {
  dispatch(loading());
  try {
    const response = await profileControllers.findProfileFromUUID(id);

    //TODO se reemplaza al final con lo del contexto
    //@ts-ignore
    if (response) dispatch(getDispatch({profile:response}));
    else {
      //@ts-ignore
      dispatch(errorDispath({}));
    }
  } catch (error: any) {
    //@ts-ignore
    dispatch(errorDispath({}));
    console.error(error)
  }
};

const resetProfile = (dispatch: any) => {
  dispatch && dispatch(resetDispatch());
}

const updateProfile = async (profile: ISProfile, dispatch: any) => {
  dispatch(getDispatch(profile));
}

const profileActions = {
  findProfileFromUUID,
  updateProfile,
  resetProfile
};

export default profileActions;
