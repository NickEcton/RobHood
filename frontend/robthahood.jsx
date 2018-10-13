import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout} from './actions/session_actions'
import configureStore from './store/store'
import Root from './components/root'
import { receiveAsset, receiveClosingPrice } from './actions/asset_actions'


document.addEventListener('DOMContentLoaded', () => {
let store
if (window.currentUser) {
  const preloadedState = {
    entities: {
      users: { [window.currentUser.id]: window.currentUser}
    },
    session: { id: window.currentUser.id }
  };
  store = configureStore(preloadedState);
  delete window.currentUser;
} else {
  store = configureStore();
}
let root = document.getElementById('root');
ReactDOM.render(<Root store={store}/>, root)

// TESTING

window.getState = store.getState
window.dispatch = store.dispatch
window.signup = signup;
window.login = login;
window.logout = logout;
window.receiveAsset = receiveAsset
window.closePrice = receiveClosingPrice

//
})
