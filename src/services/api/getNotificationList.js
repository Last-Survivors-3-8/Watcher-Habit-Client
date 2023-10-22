import api from '../../lib/api';

const getNotificationListAPI = async (userId) => {
  const response = await api.get(`/notification/${userId}`, {
    withCredentials: true,
  });
  const notifications = response.data.data;

  return notifications;
};

export default getNotificationListAPI;
