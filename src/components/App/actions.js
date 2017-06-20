import _ from 'lodash';
import {
  USERS_GATHER_REQUEST,
  USERS_GATHER_RESOLVE,
  // USERS_GATHER_FAILURE,
  USERS_ADD_REQUEST,
  // USERS_ADD_RESOLVE,
  USERS_REMOVE_REQUEST,
  // USERS_REMOVE_RESOLVE,
  USERS_LOAD_REQUEST,
  USERS_LOAD_RESOLVE
  // USERS_LOAD_FAILURE
} from './actionTypes';
import { DB } from '../../firebase';

function generateGroups(t) {
  let lunchGroups = [];
  let group = [];

  let teams = _(t).values().filter(team => team.length).value();
  let peopleRemaining = _(teams).flattenDeep().value().length;

  function sync(updatedTeam) {
    teams = _(updatedTeam).values().filter(team => team.length).value();
    peopleRemaining = _(teams).flattenDeep().value().length;
  }

  while (peopleRemaining) {
    for (const team of teams) {
      // Choose a person, at random, from the current team
      const idx = _.random(team.length - 1);

      // We have three states of operation, depending on
      // the amount of teams remaining to dispurse into
      // lunch groups: 4+, 3, or 1-2

      // Also, when groups of four can't be formed, we
      // are biasing the formation of three-person groups
      // (over five-person groups)——for UX purposes. Because,
      // smaller groups lend themselves to deeper conversations

      if (teams.length >= 4) {
        // Add person to group, and discard from their team
        group = [...group, team[idx]];
        team.splice(idx, 1);
        sync(teams);
        // If lunch group is full, concat it, and reset
        if (group.length === 4) {
          lunchGroups = [...lunchGroups, group];
          group = [];
        }
      } else if (teams.length === 3) {
        // Add person to group, and discard from their team
        group = [...group, team[idx]];
        team.splice(idx, 1);
        sync(teams);
        // If lunch group is full, yield it, and reset
        if (group.length === 3) {
          lunchGroups = [...lunchGroups, group];
          group = [];
        }
      } else if (teams.length <= 2) {
        // Now, 1 to 2 teams remain to dispurse, so
        // instead of making more groups, we're assigning
        // one person at a time to the previously
        // made groups which have less than 5 people

        let groupIdx;
        group = _(lunchGroups).findLast((g, i) => {
          // Record index of group, so we know where to reinsert it
          groupIdx = i;
          return g.length < 5;
        })
        .concat(team[idx]);

        team.splice(idx, 1);
        sync(teams);

        // Update collection
        lunchGroups.splice(groupIdx, 1, group);
      }
    }
  }
  return lunchGroups;
}

export const gather = teams => (
  (dispatch) => {
    dispatch({ type: USERS_GATHER_REQUEST });
    const lunchGroups = generateGroups(teams);
    dispatch({ type: USERS_GATHER_RESOLVE, lunchGroups });
    // dispatch({ type: USERS_GATHER_FAILURE });
  }
);

// GET
const loadRequest = () => ({ type: USERS_LOAD_REQUEST });
const loadResolve = () => ({
  type: USERS_LOAD_RESOLVE,
  isDataLoaded: true,
});
// const loadFailure = () => ({ type: APP_LOAD_FAILURE });
export const load = () => (
  (dispatch) => {
    dispatch(loadRequest());
    DB.ref('users/').once('value', (users) => {
      setTimeout(() =>
        dispatch(loadResolve(
          users.val()
        )), 500
      );
    });
  }
);

export const addUser = () => (
  (dispatch) => {
    // TODO
    dispatch({ type: USERS_ADD_REQUEST });
  }
);

export const removeUser = () => (
  (dispatch) => {
    // TODO
    dispatch({ type: USERS_REMOVE_REQUEST });
  }
);
