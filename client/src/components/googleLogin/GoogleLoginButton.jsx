import React from 'react';
import GoogleLogin from 'react-google-login';
import './googleLogin.css';

const GoogleLoginButton = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleLogin className="loginGoogle"
      clientId="715051741310-q2048662r8tv4g3h4srga66db0o1nifh.apps.googleusercontent.com"
      buttonText="Iniciar sesión con Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleLoginButton;
