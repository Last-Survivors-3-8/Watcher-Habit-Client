import api from '../../../lib/api';

const postHabitAPI = async (body) => {
  return await api.post('/habit', body, { withCredentials: true });
};

export default postHabitAPI;
