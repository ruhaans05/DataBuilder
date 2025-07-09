import axios from "axios";

const BASE_URL = "http://localhost:8000";

export const scoreData = (file) => {
  const formData = new FormData();
  formData.append("file", file);
  return axios.post(`${BASE_URL}/score`, formData);
};
