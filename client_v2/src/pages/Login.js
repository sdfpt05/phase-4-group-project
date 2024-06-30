// src/pages/Login.js
import React from 'react';
import AuthForm from '../components/AuthForm';

const Login = ({ history }) => {
  const handleAuth = (data) => {
    // Save token to localStorage or handle authentication
    history.push('/');
  };

  return (
    <div>
      <h1>Login</h1>
      <AuthForm type="login" onAuth={handleAuth} />
    </div>
  );
};

export default Login;

