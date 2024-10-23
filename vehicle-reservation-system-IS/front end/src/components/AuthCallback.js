// src/components/AuthCallback.js
import React, { useEffect } from "react";
import { useAuthContext } from "@asgardeo/auth-react";

const AuthCallback = () => {
  const { state, signIn, getAccessToken } = useAuthContext();

  useEffect(() => {
    if (state.isAuthenticated) {
      getAccessToken().then((token) => {
        console.log("Access token: ", token);
      });
    }
  }, [state]);

  return (
    <div>
      {state.isAuthenticated ? <h1>Welcome Back!</h1> : <h1>Authenticating...</h1>}
    </div>
  );
};

export default AuthCallback;
