import api from '../../lib/api';

const loginAPI = async (email) => {
  return await api.post(
    '/auth/login',
    {
      email,
    },
    { withCredentials: true },
  );
};

export default loginAPI;
