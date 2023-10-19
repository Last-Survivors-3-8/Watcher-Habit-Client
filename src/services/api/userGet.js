import api from '../../lib/api';

export const getUserInfo = async (
  userId,
  include = '',
  withUserData = true,
) => {
  try {
    const response = await api.get(`/user/${userId}`, {
      params: {
        include,
        withUserData,
      },
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserProfileImage = async (userId) => {
  try {
    const user = await getUserInfo(userId);

    return user.profileImageUrl;
  } catch (error) {
    throw error;
  }
};

export default getUserInfo;
