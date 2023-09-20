import React, { useEffect } from 'react';
import NotificationItem from './NotificationItem';
import { useNavigate } from 'react-router-dom';
import logoutAPI from '../../services/api/logout';
import getUserIdFromToken from '../../utils/getUserIdFromToken';

const bellIcon = `${process.env.PUBLIC_URL}/images/notification/bell.png`;

const loginUserId = getUserIdFromToken();

const NotificationList = ({ notifications, setNotifications }) => {
  useEffect(() => {
    const eventSource = new EventSource(
      `${process.env.REACT_APP_SERVER_DOMAIN}/api/group/events?userId=${loginUserId}`,
    );

    eventSource.onmessage = (event) => {
      const newNotification = JSON.parse(event.data);
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        newNotification,
      ]);
    };

    eventSource.onerror = (error) => {
      console.error('SSE 에러(EventSource failed):', error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [setNotifications]);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutAPI();
      navigate('/');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div
      className='bg-dark-blue-bg rounded-lg h-[80vh] flex flex-col'
      style={{ fontFamily: 'NotoSansKR' }}
    >
      <div className='flex justify-between p-2 items-center'>
        <div className='flex items-center'>
          <img src={bellIcon} alt='bell icon' className='h-4 w-4 mr-2' />
          <p className='text-green-txt font-bold'>알림</p>
        </div>
      </div>

      <div className='overflow-y-auto flex-grow custom-scrollbar'>
        {notifications.map((notification) => (
          <NotificationItem
            key={notification._id}
            content={notification.content}
            date={notification.createdAt}
            status={notification.status}
          />
        ))}
      </div>

      <div className='flex-shrink-0'>
        <button
          className='w-full text-center py-2 text-sm text-red-400'
          onClick={handleLogout}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default NotificationList;
