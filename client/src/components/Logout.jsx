import React from "react";
import { useAuth } from "../authcontext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div>
      <a href="/" onClick={handleLogout}>Logout</a>
    </div>
  );
};

export default Logout;
