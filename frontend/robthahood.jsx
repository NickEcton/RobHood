import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout} from './Util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
let root = document.getElementById('root');
ReactDOM.render(<h1>supsupsup</h1>, root)

// TESTING

window.signup = signup;
window.login = login;
window.logout = logout;

//
})
