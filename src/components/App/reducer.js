import {
  USERS_LOAD_RESOLVE,
  USERS_GATHER_RESOLVE,
  USERS_ADD_RESOLVE
} from './actionTypes';

const initialState = {
  // Object of arrays of objects, representing employees by team
  teams: {},
  // Array of arrays of objects, representing tastebuds
  lunchGroups: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_LOAD_RESOLVE:
      return {
        ...state,
        teams: action.teams,
        isDataLoaded: action.isDataLoaded,
      };
    case USERS_GATHER_RESOLVE:
      return {
        ...state,
        lunchGroups: action.lunchGroups,
        groupsAreResolved: action.groupsAreResolved,
      };
    case USERS_ADD_RESOLVE:
      return {
        ...state,
        teams: {
          ...action.teams,
          [action.teamName]: [...action.team, action.newUser],
        },
      };
    default:
      return state;
  }
};

export default appReducer;
