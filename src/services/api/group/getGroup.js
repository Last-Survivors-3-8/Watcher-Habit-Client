import getUserIdFromToken from '../../../utils/getUserIdFromToken';
import api from '../../../lib/api';

const getGroupAPI = async (groupId) => {
  const userId = getUserIdFromToken();

  return await api.get(`/group/${groupId}?userId=${userId}`, {
    withCredentials: true,
  });
};

export default getGroupAPI;
