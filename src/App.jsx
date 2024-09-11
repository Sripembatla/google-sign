import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const App = () => {
  const handleLoginSuccess = (credentialResponse) => {
    console.log('Logged in successfully:', credentialResponse);
    // Send the credential to your backend for further processing
  };

  const handleLoginFailure = (error) => {
    console.error('Login failed:', error);
  };

  return (
    <GoogleOAuthProvider clientId="213397272891-eqni19lqcbot553sj3k4rh4e1jm0815n.apps.googleusercontent.com">
      <div className="App">
        <h1>Google Sign-In with React</h1>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;