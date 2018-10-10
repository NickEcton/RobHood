import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
      <div></div>
  );
  const greetThem = () => {
    return (
    <nav>
      <h1>Hello, {currentUser.username} what</h1>
      <button onClick={logout}>Logout!</button>
    </nav>
  )}
return currentUser ? greetThem() : sessionLinks()
}

export default Greeting;
