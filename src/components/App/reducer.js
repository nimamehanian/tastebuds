import {
  USERS_GATHER_RESOLVE
} from './actionTypes';
import teams from '../../teams';

const initialState = {
  // Object of arrays of objects, representing employees by team
  teams,
  // Array of arrays of objects, representing tastebuds
  lunchGroups: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_GATHER_RESOLVE:
      return {
        ...state,
        lunchGroups: action.lunchGroups,
        groupsAreResolved: true,
      };
    // case USERS_ADD:
      // return { ...state, users: [...state.users, action.user] };
    default:
      return state;
  }
};

export default appReducer;
