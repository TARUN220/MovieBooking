import React from 'react'
import AuthForm from './AuthForm'

const Auth = () => {
    const getData = (data) => {
        console.log("authC", data);
    };
  return (
    <div>
        <AuthForm />
    </div>
  )
};

export default Auth;
