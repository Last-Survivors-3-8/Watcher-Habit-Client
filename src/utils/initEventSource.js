import getUserIdFromToken from './getUserIdFromToken';

function initEventSource(onMessage, onError) {
  const loginUserId = getUserIdFromToken();
  let reconnecting = false;

  const eventSource = new EventSource(
    `${process.env.REACT_APP_SERVER_DOMAIN}/events?userId=${loginUserId}`,
    { withCredentials: true },
  );

  eventSource.onmessage = function (event) {
    const notification = JSON.parse(event.data);

    if (notification.type === 'setHeader') {
      return;
    }

    onMessage(notification);
  };

  eventSource.onerror = function (error) {
    if (reconnecting) return;

    eventSource.close();

    reconnecting = true;

    setTimeout(() => {
      reconnecting = false;
      initEventSource(onMessage, onError);
    }, 0);

    if (!reconnecting && onError) {
      onError(error);
    }
  };

  return eventSource;
}

export default initEventSource;
