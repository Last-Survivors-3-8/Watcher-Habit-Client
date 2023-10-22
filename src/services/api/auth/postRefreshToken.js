import axios from 'axios';

const refreshTokenAPI = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_DOMAIN}/api`,
});

const postRefreshTokenAPI = async () => {
  return await refreshTokenAPI.post(
    '/auth/refreshToken',
    {},
    { withCredentials: true },
  );
};

export default postRefreshTokenAPI;
