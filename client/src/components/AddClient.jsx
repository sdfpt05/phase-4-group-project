import React, { useState } from 'react';
import './css/Signup.css';

const AddClient = () => {
  const [roll, setRoll] = useState('');
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    let errors = {};
    if (!roll) {
      errors.roll = 'Roll number is required';
    }
    if (!username) {
      errors.username = 'Username is required';
    }
    if (!mobile) {
      errors.mobile = 'Mobile number is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
    }

    if (Object.keys(errors).length === 0) {
      // Handle form submission, e.g., send data to server
      const formData = { roll, username, mobile, email };
      console.log('Form data:', formData);

      // Clear the form after submission (optional)
      setRoll('');
      setUsername('');
      setMobile('');
      setEmail('');
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className='client-form-container'>
      <form className='client-form' onSubmit={handleSubmit}>
        <h2>Add Client</h2>
        <div className='form-group'>
          <label htmlFor='roll'>Roll No:</label>
          <input
            type='text'
            id='roll'
            name='roll'
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
          />
          {errors.roll && <div className='error'>{errors.roll}</div>}
        </div>
        <div className='form-group'>
          <label htmlFor='username'>User Name:</label>
          <input
            type='text'
            id='username'
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <div className='error'>{errors.username}</div>}
        </div>
        <div className='form-group'>
          <label htmlFor='mobile'>Mobile:</label>
          <input
            type='text'
            id='mobile'
            name='mobile'
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          {errors.mobile && <div className='error'>{errors.mobile}</div>}
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='text'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className='error'>{errors.email}</div>}
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default AddClient;
