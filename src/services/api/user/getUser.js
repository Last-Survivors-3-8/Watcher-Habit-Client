import api from '../../../lib/api';

const getUserInfoAPI = async (userId, include = '', withUserData = true) => {
  return await api.get(`/user/${userId}`, {
    params: {
      include,
      withUserData,
    },
    withCredentials: true,
  });
};

export default getUserInfoAPI;
