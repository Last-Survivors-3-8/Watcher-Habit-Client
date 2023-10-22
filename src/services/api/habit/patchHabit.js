import api from '../../../lib/api';

const patchHabitAPI = async (habitId, habitData) => {
  return await api.patch(`/habit/${habitId}`, habitData, {
    withCredentials: true,
  });
};

export default patchHabitAPI;
