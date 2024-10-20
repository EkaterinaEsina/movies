import { useEffect } from 'react';

export const Notification = ({ content, onClose = () => null }) => {
  useEffect(() => {
    const timerId = setTimeout(onClose, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [content, onClose]);

  return (
    <div id="toast-container">
      <div className="toast">
        {content}
      </div>
    </div>
  );
}