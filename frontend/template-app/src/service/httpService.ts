/* eslint-disable prettier/prettier */
import axios from "axios";
const baseUrl = "http://localhost:4444/api/";
// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    config.baseURL = baseUrl;

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      return "Unauthorized";
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      if (error.response.status === 401) {
        return "Unauthorized";
      }
    }
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};
