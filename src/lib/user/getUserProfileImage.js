import getUserInfoAPI from '../../services/api/user/getUser';

const getUserProfileImage = async (userId) => {
  try {
    const user = await getUserInfoAPI(userId);

    return user.data.profileImageUrl;
  } catch (error) {
    throw error;
  }
};

export default getUserProfileImage;
