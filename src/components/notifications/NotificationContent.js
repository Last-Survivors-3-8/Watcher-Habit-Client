const NotificationContent = ({ content }) => {
  const parts = content.split('.').filter((part) => part.trim() !== '');

  return (
    <div className='text-center text-white text-sm mt-5'>
      {parts.map((part, index) => (
        <p key={index}>
          {part.trim()}
          {index === 0 && '.'}
          <br />
        </p>
      ))}
    </div>
  );
};

export default NotificationContent;
