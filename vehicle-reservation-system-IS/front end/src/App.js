// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthButton from "./components/AuthButton";
import UserProfile from "./components/UserProfile";
import ReservationForm from "./components/ReservationForm";
import AuthCallback from "./components/AuthCallback";  // New component for OAuth2 callback
import { Container, Box, Typography } from "@mui/material";  // Material-UI components

function App() {
  return (
    <Router>
      <Container maxWidth="md">
        {/* Application Title */}
        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Typography variant="h3" gutterBottom>
            Vehicle Reservation System
          </Typography>
          {/* Auth Button for Login/Logout */}
          <AuthButton />
        </Box>

        {/* Define routes */}
        <Routes>
          {/* Route to handle OAuth2 callback */}
          <Route path="/oauth2/callback" element={<AuthCallback />} />

          {/* Home route to render user profile and reservation form */}
          <Route
            path="/"
            element={
              <Box mt={4}>
                <UserProfile />
                <ReservationForm />
              </Box>
            }
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
