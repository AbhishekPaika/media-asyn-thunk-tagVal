import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Set the base URL based on the environment (local or production)
const baseUrl = process.env.NODE_ENV === "development" ? process.env.REACT_APP_API_BASE_URL || "http://localhost:3001" : "https://media-backend-4ywz.onrender.com"; // Production URL

const removeUser = createAsyncThunk("users/remove", async (user) => {
  await axios.delete(`${baseUrl}/users/${user.id}`);

  return user;
});

export { removeUser };
