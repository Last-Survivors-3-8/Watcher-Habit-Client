import getUserIdFromToken from './getUserIdFromToken';

function initEventSource(onMessage, onError) {
  const loginUserId = getUserIdFromToken();

  const eventSource = new EventSource(
    `${process.env.REACT_APP_SERVER_DOMAIN}/events?userId=${loginUserId}`,
    { withCredentials: true },
  );

  eventSource.onmessage = function (event) {
    const notification = JSON.parse(event.data);

    onMessage(notification);
  };

  eventSource.onerror = function (error) {
    console.error('initEventSource error:', error);

    eventSource.close();

    setTimeout(() => {
      initEventSource(onMessage, onError);
    }, 0);

    if (onError) {
      onError(error);
    }
  };

  return eventSource;
}

export default initEventSource;
