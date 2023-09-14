import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import userGetAPI from '../../services/api/userGet';
import LogoutButton from '../../components/Common/LogoutButton';
import decodeJwtResponse from '../../utils/decodeJwtResponse';
import { useSelector } from 'react-redux';

const MyHabit = () => {
  const { nickname } = useParams();
  const [userData, setUserData] = useState(null);
  const [fetchClicked, setFetchClicked] = useState(true);

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleFetchClick = () => {
    setFetchClicked(!fetchClicked);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const decoded = decodeJwtResponse(accessToken);
        const userId = decoded.userId;

        const response = await userGetAPI(userId, accessToken);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (accessToken && fetchClicked) {
      fetchUserData();
    }
  }, [nickname, accessToken, fetchClicked]);

  return (
    <div>
      <h2>{nickname}'s Habits</h2>
      <button onClick={handleFetchClick}>Fetch User Data</button>
      <LogoutButton />
    </div>
  );
};

export default MyHabit;
