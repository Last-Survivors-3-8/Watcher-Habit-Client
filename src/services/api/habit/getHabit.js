import api from '../../../lib/api';

const getHabitAPI = async (habitId) => {
  return await api.get(`/habit/${habitId}`, { withCredentials: true });
};

export default getHabitAPI;
