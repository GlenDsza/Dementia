import React, { useEffect, useRef, useState } from 'react';
import './Notifications.scss';
import {
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { IoAlertCircleOutline, IoAlertCircle } from 'react-icons/io5';
import { AiFillCheckCircle, AiFillWarning } from 'react-icons/ai';
import { BiSolidErrorAlt } from 'react-icons/bi';

const initialNotificationsData = [
  {
    id: 1,
    type: 'reminder',
    icon: 'FaClock',
    header: 'Reminder',
    message: 'Mary reached his daily step goal of 10,000 steps.',
    completed: false,
    time: '12:20 pm',
    for: 'patient',
  },
  {
    type: 'warning',
    icon: 'BsFillInfoCircleFill',
    header: 'Warning',
    message: 'Mary has been stationary for over an hour.',
    completed: false,
    time: '12:20 pm',
    for: 'caretaker',
  },
  {
    type: 'success',
    icon: 'BsFillInfoCircleFill',
    header: 'Reminder',
    message: "123 Mary's medication needs to be taken at 10 AM.",
    completed: false,
    time: '12:20 pm',
    for: 'both',
  },
  {
    type: 'reminder',
    icon: 'FaClock',
    header: 'Reminder',
    message: '232323  Mary reached his daily step goal of 10,000 steps.',
    completed: false,
    time: '12:20 pm',
    for: 'patient',
  },
  {
    type: 'alert',
    icon: 'BsFillInfoCircleFill',
    header: 'Warning',
    message: '1111Mary has been stationary for over an hour.',
    completed: false,
    time: '12:20 pm',
    for: 'caretaker',
  },
  {
    type: 'reminder',
    icon: 'BsFillInfoCircleFill',
    header: 'Reminder',
    message: "Mary's medication needs to be taken at 10 AM.",
    completed: false,
    for: 'caretaker',
  },
  {
    type: 'reminder',
    icon: 'FaClock',
    header: 'Reminder',
    message: 'Mary reached his daily step goal of 10,000 steps.',
    completed: false,
    for: 'caretaker',
  },
  {
    type: 'warning',
    icon: 'BsFillInfoCircleFill',
    header: 'Warning',
    message: 'Mary has been stationary for over an hour.',
    completed: false,
    for: 'caretaker',
  },
  {
    type: 'reminder',
    icon: 'BsFillInfoCircleFill',
    header: 'Reminder',
    message: "Mary's medication needs to be taken at 10 AM.",
    completed: false,
    for: 'caretaker',
  },
];

const Notification = () => {
  const cardRef = useRef<HTMLIonCardElement>(null);
  const [notifications, setNotifications] = useState(initialNotificationsData);

  useEffect(() => {
    const scrollToLastNotification = () => {
      if (cardRef.current) {
        const lastNotification = cardRef.current.querySelector(
          '.notification:last-child'
        ) as HTMLElement | null;
        if (lastNotification) {
          lastNotification.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const interval = setInterval(() => {
      scrollToLastNotification();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case 'warning': //red
        return <AiFillWarning />;
      case 'alert': //yellow
        return <BiSolidErrorAlt />;
      case 'reminder': //blue
        return <IoAlertCircle />;
      case 'success': //green
        return <AiFillCheckCircle />;
    }
  };

  const handleCheckboxChange = (index) => {
    setNotifications(
      notifications.map((notification, i) =>
        i === index
          ? { ...notification, completed: !notification.completed }
          : notification
      )
    );
  };

  return (
    <IonContent id="care-notification-container" className="ion-padding">
      <div className="flex flex-col">
        {notifications.map(
          (notification, index) =>
            !notification.completed &&
            notification.for != 'caretaker' && (
              <div key={index} className={`notification ${notification.type}`}>
                <div className="notification-content">
                  <div className="notification-details">
                    <div className="notification-icon">
                      {getIcon(notification.type)}
                    </div>
                    <p className="notification-message">
                      {notification.message}
                    </p>
                  </div>
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      checked={notification.completed}
                      onChange={() => handleCheckboxChange(index)}
                      className="notification-checkbox"
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="notification-time">{notification.time}</div>
              </div>
            )
        )}
      </div>
    </IonContent>
  );
};

export default Notification;
