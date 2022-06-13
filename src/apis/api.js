import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_END_POINT,
  timeout: 10000,
});

// interceptor
apiClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    console.error(error);
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  function (res) {
    if (res.status === 200) {
      const { data } = res;

      return data;
    }

    throw new Error(res);
  },
  function (error) {
    console.error(error);
  },
);

export default apiClient;
