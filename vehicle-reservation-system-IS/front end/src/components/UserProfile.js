// src/components/UserProfile.js
import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";  // Material-UI components
import { useAuthContext } from "@asgardeo/auth-react";  // Context to fetch user data

const UserProfile = () => {
  const { state } = useAuthContext();
  const { username, name, email, phone, country } = state?.user ?? {};

  // State to handle input fields (editable version)
  const [profileData, setProfileData] = useState({
    username: username || "",
    name: name || "",
    email: email || "",
    phone: phone || "",
    country: country || "",
  });

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        User Profile
      </Typography>

      {/* Editable input fields */}
      <TextField
        label="Username"
        name="username"
        fullWidth
        sx={{ mb: 3 }}
        value={profileData.username}
        onChange={handleChange}
      />
      <TextField
        label="Name"
        name="name"
        fullWidth
        sx={{ mb: 3 }}
        value={profileData.name}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        name="email"
        fullWidth
        sx={{ mb: 3 }}
        value={profileData.email}
        onChange={handleChange}
      />
      <TextField
        label="Contact"
        name="phone"
        fullWidth
        sx={{ mb: 3 }}
        value={profileData.phone}
        onChange={handleChange}
      />
      <TextField
        label="Country"
        name="country"
        fullWidth
        sx={{ mb: 3 }}
        value={profileData.country}
        onChange={handleChange}
      />

      <Button variant="contained" color="primary">
        Save
      </Button>
    </Box>
  );
};

export default UserProfile;
