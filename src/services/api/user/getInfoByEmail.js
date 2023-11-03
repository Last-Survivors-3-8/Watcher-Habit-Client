import api from '../../../lib/api';

const getInfoByEmailAPI = async (email) => {
  return await api.get(`/user/getInfoByEmail?email=${email}`, {
    withCredentials: true,
  });
};

export default getInfoByEmailAPI;
