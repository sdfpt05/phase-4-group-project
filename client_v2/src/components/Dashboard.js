// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from '../services/api';

const Dashboard = () => {
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get('/dashboard');
        setStatistics(response.data);
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };
    fetchStatistics();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Books Count: {statistics.books_count}</p>
      <p>Users Count: {statistics.users_count}</p>
      <p>Clients Count: {statistics.clients_count}</p>
    </div>
  );
};

export default Dashboard;


