import api from '../../lib/api';

const getNotificationListAPI = async (userId) => {
  const response = await api.get(`/notification/${userId}`, {
    withCredentials: true,
  });

  return response.data.notifications;
};

export default getNotificationListAPI;
