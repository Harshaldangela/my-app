import React from 'react';
import Template from '../components/Template';

const Signup = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Join Us Today"
      desc1="Start your journey with JourneyBazaar."
      desc2="Sign up to explore new destinations and unlock exclusive deals tailored just for you."
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}  // Ensure this is passed correctly
    />
  );
};

export default Signup;
