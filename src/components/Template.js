import React from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import '../index.css'; 
import {FcGoogle} from "react-icons/fc"

const Template = ({ title, desc1, desc2, formtype, setIsLoggedIn }) => {
  return (
    <div className='template-container'>
      <div className='template-content'>
        <div className='template-header'>
          <h1>{title}</h1>
          <p>
            <span>{desc1}</span>
            <span>{desc2}</span>
          </p>
        </div>
        <div className='template-form'>
          {formtype === "signup" ? (
            <SignupForm setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </div>
        <div className='template-divider'>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <button className='template-button'>
          <FcGoogle/>
          <p>Sign In With Google</p>
        </button>
      </div>
    </div>
  );
};

export default Template;
