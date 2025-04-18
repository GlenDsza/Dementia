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
    type: 'success',
    icon: 'BsFillInfoCircleFill',
    header: 'Reminder',
    message: "You have to help help Ben ready for school",
    completed: false,
    time: '09:00 am',
    for: 'both',
  },
  {
    type: 'success',
    icon: 'BsFillInfoCircleFill',
    header: 'Reminder',
    message: "Your medication needs to be taken at 10 AM.",
    completed: false,
    time: '10:30 am',
    for: 'both',
  },
  {
    type: 'warning',
    icon: 'BsFillInfoCircleFill',
    header: 'Warning',
    message: 'You have been stationary for over an hour.',
    completed: false,
    time: '01:20 pm',
    for: 'patient',
  },
  {
    type: 'reminder',
    icon: 'BsFillInfoCircleFill',
    header: 'Reminder',
    message: "You have to attend cognitive sessions",
    completed: false,
    for: 'patient',
    time: '01:30 pm',
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
