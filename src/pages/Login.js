import React from 'react';
import Template from '../components/Template';

const Login = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Experience the best travel adventures with JourneyBazaar."
      desc2="Login to access your personalized travel itineraries and exclusive offers."
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}  // Ensure this is passed correctly
    />
  );
};

export default Login;
