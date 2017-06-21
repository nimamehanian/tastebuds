import { connect } from 'react-redux';
// import {
//
// } from './actionTypes';
import {
  gather as gatherAction,
  addUser as addUserAction,
  removeUser as removeUserAction
} from './actions';
import App from './App';

const mapStateToProps = state => ({
  teams: state.app.teams,
  lunchGroups: state.app.lunchGroups,
  groupsAreResolved: state.app.groupsAreResolved,
});

const mapDispatchToProps = dispatch => ({
  gather(teams) {
    dispatch(gatherAction(teams));
  },

  addUser(user) {
    dispatch(addUserAction(user));
  },

  removeUser(user) {
    dispatch(removeUserAction(user));
  },
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
