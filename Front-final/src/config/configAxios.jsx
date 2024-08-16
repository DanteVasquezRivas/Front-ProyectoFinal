import axios from "axios";

const api = axios.create({
  URL_API: "http://localhost:3000/api-docs/",
});

export default api;
