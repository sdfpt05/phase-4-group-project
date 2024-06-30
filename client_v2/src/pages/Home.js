// src/pages/Home.js
import React from 'react';
import BookList from '../components/BookList';
import Dashboard from '../components/Dashboard';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Book Management System</h1>
      <Dashboard />
      <BookList />
    </div>
  );
};

export default Home;

