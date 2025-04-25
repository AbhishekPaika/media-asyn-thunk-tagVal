import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

// Set the base URL based on the environment (local or production)
const baseUrl = process.env.NODE_ENV === "development" ? process.env.REACT_APP_API_BASE_URL || "http://localhost:3005" : "https://media-backend-4ywz.onrender.com"; // Production URL

const addUser = createAsyncThunk("users/add", async () => {
  const response = await axios.post(`${baseUrl}/users`, {
    name: faker.name.fullName(),
  });

  return response.data;
});

export { addUser };
