
import axiosClient from "./axiosClient.js";

// Sign in
export function loginUser(email, password) {
  return axiosClient.post("/users/login", {
    email: email.trim(),
    password,
  });
}

// Create account
export function createUser(user) {
  return axiosClient.post("/users/save", user);
}

// Get all users
export function getAllUser() {
  return axiosClient.get("/users/viewUsers");
}
