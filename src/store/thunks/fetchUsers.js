import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Set the base URL based on the environment (local or production)
const baseUrl = process.env.NODE_ENV === "development" ? process.env.REACT_APP_API_BASE_URL || "http://localhost:3005" : "https://media-backend-4ywz.onrender.com"; // Production URL

// DEV ONLY!!!
const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get(`${baseUrl}/users`);

  // DEV ONLY!!! Uncomment this block only for development
  if (process.env.NODE_ENV === "development") {
    await pause(1000); // Simulate delay for development
  }

  return response.data;
});

// DEV ONLY!!!
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers };
