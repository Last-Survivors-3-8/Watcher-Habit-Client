import api from '../../../lib/api';

const postGroupAPI = async (body) => {
  return await api.post('/group', body, {
    withCredentials: true,
  });
};

export default postGroupAPI;
