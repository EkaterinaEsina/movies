import { useEffect, useContext } from 'react';
import { ShopContext } from '../../Сontext/ShopContext';

export const Notification = () => {
  const { notificationContent, closeNotification } = useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeNotification, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [notificationContent, closeNotification]);

  if (!notificationContent) {
    return null;
  }

  return (
    <div id="toast-container">
      <div className="toast">
        {notificationContent}
      </div>
    </div>
  );
}