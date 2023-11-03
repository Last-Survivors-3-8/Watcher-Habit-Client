import api from '../../../lib/api';

const checkUserAPI = async (email) => {
  return await api.get(`/user/check?email=${email}`, { withCredentials: true });
};

export default checkUserAPI;
