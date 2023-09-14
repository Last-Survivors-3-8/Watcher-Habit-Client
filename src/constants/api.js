import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_DOMAIN,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      originalRequest.url.includes(
        `${process.env.REACT_APP_SERVER_DOMAIN}/api/auth/refreshToken`,
      )
    ) {
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await api.post(
          `${process.env.REACT_APP_SERVER_DOMAIN}/api/auth/refreshToken`,
          { withCredentials: true },
        );

        const newAccessToken = res.data.accessToken;

        api.defaults.headers['Authorization'] = `Bearer ${newAccessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
