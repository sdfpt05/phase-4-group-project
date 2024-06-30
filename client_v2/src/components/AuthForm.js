// src/components/AuthForm.js
import React, { useState } from 'react';
import axios from '../services/api';

const AuthForm = ({ type, onAuth }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/${type}`, formData);
      if (response.status === 201 || response.status === 200) {
        onAuth(response.data);
      }
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Email"
      />
      <input
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        placeholder="Password"
      />
      <button type="submit">{type === 'login' ? 'Login' : 'Signup'}</button>
      {errors && <div>{errors}</div>}
    </form>
  );
};

export default AuthForm;


