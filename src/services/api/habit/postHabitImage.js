import api from '../../../lib/api';

const postHabitImageAPI = async (habitId, body) => {
  return await api.post(`/habit/${habitId}/image`, body, {
    headers: { 'Content-Type': 'multipart/form-data' },
    withCredentials: true,
  });
};

export default postHabitImageAPI;
