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
  // lunchGroups: [
  //   [
  //     { name: 'Alyssa Ransbury', imgUrl: 'https://firebasestorage.googleapis.com/v0/b/tastebuds-d7075.appspot.com/o/avatars%2Falyssa_ransbury.jpg?alt=media&token=46f9ddea-81c4-4323-bcae-d2974249bb9e' },
  //     { name: 'Frida Sjöholm', imgUrl: 'https://firebasestorage.googleapis.com/v0/b/tastebuds-d7075.appspot.com/o/avatars%2Ffrida_sjo%CC%88holm.jpg?alt=media&token=d659577b-f902-41d9-8da9-74cbf692adda' },
  //     { name: 'Nima Mehanian', imgUrl: 'https://firebasestorage.googleapis.com/v0/b/tastebuds-d7075.appspot.com/o/avatars%2Fnima_mehanian.jpg?alt=media&token=72b5bb47-7c8a-4efd-8017-447d8becd25b' },
  //     { name: 'Debbie Sorkin', imgUrl: 'https://firebasestorage.googleapis.com/v0/b/tastebuds-d7075.appspot.com/o/avatars%2Fdebbie_sorkin.jpg?alt=media&token=a987cbb4-d383-4e1a-b563-729f1df2446e' },
  //     { name: 'Jason Zhao', imgUrl: 'https://firebasestorage.googleapis.com/v0/b/tastebuds-d7075.appspot.com/o/avatars%2Fjason_zhao.jpg?alt=media&token=17a2533b-a615-4596-b70f-5b968cc9cbae' },
  //   ],
  //   [
  //     { name: 'Marissa Dulaney', imgUrl: 'https://firebasestorage.googleapis.com/v0/b/tastebuds-d7075.appspot.com/o/avatars%2Fmarissa_dulaney.jpg?alt=media&token=256afb87-a5b9-4ef6-87c5-fb299b1bbcb9' },
  //     { name: 'Keila Fong', imgUrl: 'https://firebasestorage.googleapis.com/v0/b/tastebuds-d7075.appspot.com/o/avatars%2Fkeila_fong.jpg?alt=media&token=39f67245-e7a2-4deb-9b3a-ae6c81b4bd86' },
  //     { name: 'Ian Medlock', imgUrl: 'https://firebasestorage.googleapis.com/v0/b/tastebuds-d7075.appspot.com/o/avatars%2Fian_medlock.png?alt=media&token=ef4dfd49-9da4-47eb-934a-3bc49c738443' },
  //   ],
  //   [
  //     { name: 'Dana Geisler', imgUrl: 'https://firebasestorage.googleapis.com/v0/b/tastebuds-d7075.appspot.com/o/avatars%2Fdana_geisler.jpg?alt=media&token=b3474e4d-e9a5-4524-9b2b-855301b80270' },
  //     { name: 'Alex Mashburn', imgUrl: 'https://firebasestorage.googleapis.com/v0/b/tastebuds-d7075.appspot.com/o/avatars%2Falex_mashburn.jpg?alt=media&token=c585817c-8c20-47d0-a1ec-5e87d625f91e' },
  //     { name: 'Breanna Foley', imgUrl: 'https://firebasestorage.googleapis.com/v0/b/tastebuds-d7075.appspot.com/o/avatars%2Fbreanna_foley.jpg?alt=media&token=36f709cc-9096-4dbf-88ca-f88e46205872' },
  //     { name: 'Kelsey Rowland', imgUrl: 'https://firebasestorage.googleapis.com/v0/b/tastebuds-d7075.appspot.com/o/avatars%2Fkelsey_rowland.jpg?alt=media&token=d0549f72-7e6e-45d7-b1a9-669fd860c6ad' },
  //   ],
  //   [
  //     { name: 'Alyssa Ransbury', imgUrl: 'https://firebasestorage.googleapis.com/v0/b/tastebuds-d7075.appspot.com/o/avatars%2Falyssa_ransbury.jpg?alt=media&token=46f9ddea-81c4-4323-bcae-d2974249bb9e' },
  //     { name: 'Frida Sjöholm', imgUrl: 'https://firebasestorage.googleapis.com/v0/b/tastebuds-d7075.appspot.com/o/avatars%2Ffrida_sjo%CC%88holm.jpg?alt=media&token=d659577b-f902-41d9-8da9-74cbf692adda' },
  //     { name: 'Nima Mehanian', imgUrl: 'https://firebasestorage.googleapis.com/v0/b/tastebuds-d7075.appspot.com/o/avatars%2Fnima_mehanian.jpg?alt=media&token=72b5bb47-7c8a-4efd-8017-447d8becd25b' },
  //     { name: 'Debbie Sorkin', imgUrl: 'https://firebasestorage.googleapis.com/v0/b/tastebuds-d7075.appspot.com/o/avatars%2Fdebbie_sorkin.jpg?alt=media&token=a987cbb4-d383-4e1a-b563-729f1df2446e' },
  //     { name: 'Jason Zhao', imgUrl: 'https://firebasestorage.googleapis.com/v0/b/tastebuds-d7075.appspot.com/o/avatars%2Fjason_zhao.jpg?alt=media&token=17a2533b-a615-4596-b70f-5b968cc9cbae' },
  //   ],
  //   [
  //     { name: 'Marissa Dulaney', imgUrl: 'https://firebasestorage.googleapis.com/v0/b/tastebuds-d7075.appspot.com/o/avatars%2Fmarissa_dulaney.jpg?alt=media&token=256afb87-a5b9-4ef6-87c5-fb299b1bbcb9' },
  //     { name: 'Keila Fong', imgUrl: 'https://firebasestorage.googleapis.com/v0/b/tastebuds-d7075.appspot.com/o/avatars%2Fkeila_fong.jpg?alt=media&token=39f67245-e7a2-4deb-9b3a-ae6c81b4bd86' },
  //     { name: 'Ian Medlock', imgUrl: 'https://firebasestorage.googleapis.com/v0/b/tastebuds-d7075.appspot.com/o/avatars%2Fian_medlock.png?alt=media&token=ef4dfd49-9da4-47eb-934a-3bc49c738443' },
  //   ],
  //   [
  //     { name: 'Dana Geisler', imgUrl: 'https://firebasestorage.googleapis.com/v0/b/tastebuds-d7075.appspot.com/o/avatars%2Fdana_geisler.jpg?alt=media&token=b3474e4d-e9a5-4524-9b2b-855301b80270' },
  //     { name: 'Alex Mashburn', imgUrl: 'https://firebasestorage.googleapis.com/v0/b/tastebuds-d7075.appspot.com/o/avatars%2Falex_mashburn.jpg?alt=media&token=c585817c-8c20-47d0-a1ec-5e87d625f91e' },
  //     { name: 'Breanna Foley', imgUrl: 'https://firebasestorage.googleapis.com/v0/b/tastebuds-d7075.appspot.com/o/avatars%2Fbreanna_foley.jpg?alt=media&token=36f709cc-9096-4dbf-88ca-f88e46205872' },
  //     { name: 'Kelsey Rowland', imgUrl: 'https://firebasestorage.googleapis.com/v0/b/tastebuds-d7075.appspot.com/o/avatars%2Fkelsey_rowland.jpg?alt=media&token=d0549f72-7e6e-45d7-b1a9-669fd860c6ad' },
  //   ],
  // ],
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
