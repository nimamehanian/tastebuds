import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import _ from 'lodash';

import { USERS_GATHER_RESOLVE } from '../src/components/App/actionTypes';
import { gather } from '../src/components/App/actions';
import teams from '../src/teams';

const mockStore = configureStore([thunk]);

describe('App', () => {
  describe('actions', () => {
    describe('`gather`', () => {
      let action;
      const store = mockStore({});
      store.dispatch(gather(teams))
      .then(() => {
        action = store.getActions()[0];
        // Given fixed initial data of `teams`,
        // we can expect the shape of the resulting
        // lunchGroups data structure to be the same——
        // albeit only with a jumbled order of teammates.
        // Therefore, it's "pure" in the sense that we can
        // reliably test `generateGroups` by testing the
        // shape of its output
      });

      it('Dispatches an action of type `USERS_GATHER_RESOLVE`', () => {
        expect(action.type).toEqual(USERS_GATHER_RESOLVE);
      });

      it('Contains the payload `lunchGroups`, yielding the correct number of groups', () => {
        // Expect 21 groups, when initially given 86 employees
        expect(action.lunchGroups.length).toEqual(21);
      });

      it('Makes groups of between 3 to 5 members', () => {
        expect(
          _(action.lunchGroups).every(group => (
            group.length >= 3 && group.length <= 5
          ))
        ).toEqual(true);
      });
    });
  });

  describe('reducer', () => {
    it('reduces (TODO)', () => {
    });
  });

  describe('container', () => {
    it('contains (TODO)', () => {
      // TODO
    });
  });

  describe('component', () => {
    it('pwns (TODO)', () => {
      // TODO
    });
  });
});
