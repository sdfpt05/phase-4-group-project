import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const serverURL = '/login'; // Adjusted server URL
      const res = await fetch(serverURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await res.json();
      console.log('Login successful:', data);
      // Navigate to the dashboard after successful login
      navigate('/dashboard'); // Adjusted navigation path
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='login-form-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        {error && <div className='error'>{error}</div>}
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
