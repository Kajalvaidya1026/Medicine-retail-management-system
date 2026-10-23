import axiosClient from "./axiosClient";

export function loginUser(email, password) {
  return axiosClient.post("/users/login", {
    email: email.trim(),
    password,
  });
}