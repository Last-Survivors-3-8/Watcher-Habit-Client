import api from '../../../lib/api';

const patchGroupAPI = async (groupId, body) => {
  return await api.patch(`/group/${groupId}/members`, body, {
    withCredentials: true,
  });
};

export default patchGroupAPI;
