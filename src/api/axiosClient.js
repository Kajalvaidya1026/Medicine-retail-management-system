// import axios from "axios";

// const axiosClient = axios.create({
//   baseURL: "http://localhost:8085/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default axiosClient;

import axios from "axios";

const axiosClient = axios.create({
  baseURL: "/api",   // Vite proxy forwards /api/... to localhost:8085/...
  headers: { "Content-Type": "application/json" },
});

export default axiosClient;