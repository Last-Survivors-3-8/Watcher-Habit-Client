import api from '../../../lib/api';

const getPeriodicHabitsAPI = async (userId, startDateStr, endDateStr) => {
  return await api.get(
    `/habit/periodic/${userId}?startDate=${startDateStr}&endDate=${endDateStr}`,
    { withCredentials: true },
  );
};

export default getPeriodicHabitsAPI;
