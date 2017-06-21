import { connect } from 'react-redux';
import {
  load as loadAction,
  gather as gatherAction,
  addUser as addUserAction,
  removeUser as removeUserAction
} from './actions';
import App from './App';

const mapStateToProps = state => ({
  teams: state.app.teams,
  isDataLoaded: state.app.isDataLoaded,
  lunchGroups: state.app.lunchGroups,
  groupsAreResolved: state.app.groupsAreResolved,
});

const mapDispatchToProps = dispatch => ({
  load() {
    dispatch(loadAction());
  },

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
