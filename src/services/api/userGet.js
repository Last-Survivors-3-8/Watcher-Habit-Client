import axios from 'axios';
import api from '../../constants/api';

const userGetAPI = (userId, accessToken) => {
  return api.get(`${process.env.REACT_APP_SERVER_DOMAIN}/api/user/${userId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export default userGetAPI;
