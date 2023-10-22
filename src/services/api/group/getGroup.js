import getUserIdFromToken from '../../../utils/getUserIdFromToken';
import api from '../../../lib/api';

const getGroupAPI = async (groupId) => {
  const userId = getUserIdFromToken();

  const response = await api.get(`/group/${groupId}?userId=${userId}`, {
    withCredentials: true,
  });

  return response.data;
};

export default getGroupAPI;
