// src/components/AuthButton.js
import React from "react";
import { Button } from "@mui/material";  // Import Material-UI Button
import { useAuthContext } from "@asgardeo/auth-react";

const AuthButton = () => {
  const { state, signIn, signOut } = useAuthContext();

  return (
    <>
      {state.isAuthenticated ? (
        <Button variant="contained" color="secondary" onClick={() => signOut()}>
          Logout
        </Button>
      ) : (
        <Button variant="contained" color="primary" onClick={() => signIn()}>
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
