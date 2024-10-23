// src/components/ReservationForm.js
import React, { useState } from "react";
import { Button, TextField, Box, MenuItem, Typography } from "@mui/material";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "10 AM",
    location: "District 1",
    vehicleNo: "",
    mileage: 0,
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        Make a Reservation
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Date"
          name="date"
          type="date"
          fullWidth
          sx={{ mb: 3 }}
          InputLabelProps={{ shrink: true }}
          onChange={handleChange}
        />
        <TextField
          label="Time"
          name="time"
          select
          fullWidth
          sx={{ mb: 3 }}
          value={formData.time}
          onChange={handleChange}
        >
          <MenuItem value="10 AM">10 AM</MenuItem>
          <MenuItem value="11 AM">11 AM</MenuItem>
          <MenuItem value="12 PM">12 PM</MenuItem>
        </TextField>
        <TextField
          label="Location"
          name="location"
          select
          fullWidth
          sx={{ mb: 3 }}
          value={formData.location}
          onChange={handleChange}
        >
          <MenuItem value="District 1">District 1</MenuItem>
          <MenuItem value="District 2">District 2</MenuItem>
          <MenuItem value="District 3">District 3</MenuItem>
        </TextField>
        <TextField
          label="Vehicle No"
          name="vehicleNo"
          fullWidth
          sx={{ mb: 3 }}
          onChange={handleChange}
        />
        <TextField
          label="Mileage"
          name="mileage"
          type="number"
          fullWidth
          sx={{ mb: 3 }}
          onChange={handleChange}
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          fullWidth
          sx={{ mb: 3 }}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ReservationForm;
