// src/pages/Signup.js
import React from 'react';
import AuthForm from '../components/AuthForm';

const Signup = ({ history }) => {
  const handleAuth = (data) => {
    // Save token to localStorage or handle authentication
    history.push('/');
  };

  return (
    <div>
      <h1>Signup</h1>
      <AuthForm type="signup" onAuth={handleAuth} />
    </div>
  );
};

export default Signup;

