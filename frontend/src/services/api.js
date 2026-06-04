/*
api.js

This file creates a reusable Axios instance used
for communication between the React frontend and
Express backend.
*/

//Import axios for API requests
import axios from "axios";

// Create reusable axios instance
const API = axios.create({
baseURL: "http://127.0.0.1:5001", // Base URL for backend server
});

export default API;