import React, { useEffect, useRef, useState } from 'react';
import './Notifications.scss';
import {
  IonButtons, IonCard, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar
} from '@ionic/react';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { IoIosWarning } from "react-icons/io";
import { FaClock } from "react-icons/fa";
import { IoNotifications } from 'react-icons/io5';
import { IoAlertCircleOutline } from "react-icons/io5";

const initialNotificationsData = [
  {
    type: 'reminder',
    icon: 'FaClock',
    header: 'Reminder',
    message: 'John reached his daily step goal of 10,000 steps.',
    completed: false
  },
  {
    type: 'warning',
    icon: 'BsFillInfoCircleFill',
    header: 'Warning',
    message: 'John has been stationary for over an hour.',
    completed: false
  },
  {
    type: 'reminder',
    icon: 'BsFillInfoCircleFill',
    header: 'Reminder',
    message: "John's medication needs to be taken at 10 AM.",
    completed: false
  },
  {
    type: 'reminder',
    icon: 'FaClock',
    header: 'Reminder',
    message: 'John reached his daily step goal of 10,000 steps.',
    completed: false
  },
  {
    type: 'warning',
    icon: 'BsFillInfoCircleFill',
    header: 'Warning',
    message: 'John has been stationary for over an hour.',
    completed: false
  },
  {
    type: 'reminder',
    icon: 'BsFillInfoCircleFill',
    header: 'Reminder',
    message: "John's medication needs to be taken at 10 AM.",
    completed: false
  },  {
    type: 'reminder',
    icon: 'FaClock',
    header: 'Reminder',
    message: 'John reached his daily step goal of 10,000 steps.',
    completed: false
  },
  {
    type: 'warning',
    icon: 'BsFillInfoCircleFill',
    header: 'Warning',
    message: 'John has been stationary for over an hour.',
    completed: false
  },
  {
    type: 'reminder',
    icon: 'BsFillInfoCircleFill',
    header: 'Reminder',
    message: "John's medication needs to be taken at 10 AM.",
    completed: false
  },
  // Add more notifications as needed
];

const Notification = () => {
  const cardRef = useRef<HTMLIonCardElement>(null);
  const [notifications, setNotifications] = useState(initialNotificationsData);

  useEffect(() => {
    const scrollToLastNotification = () => {
      if (cardRef.current) {
        const lastNotification = cardRef.current.querySelector('.notification:last-child') as HTMLElement | null;
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

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'FaClock':
        return <FaClock className="notification-icon" />;
      case 'BsFillInfoCircleFill':
        return <BsFillInfoCircleFill className="notification-icon" />;
      case 'IoIosWarning':
        return <IoIosWarning className="notification-icon" />;
      default:
        return <IoNotifications className="notification-icon" />;
    }
  };

  const handleCheckboxChange = (index) => {
    setNotifications(notifications.map((notification, i) => 
      i === index ? { ...notification, completed: !notification.completed } : notification
    ));
  };

  return (
    <IonPage className="">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Updates</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonCard ref={cardRef} className="rounded-xl card-shadow flex flex-col mt-4 p-4">
          <div className="flex flex-col">
          {notifications.map((notification, index) => (
            !notification.completed && (
              <div key={index} className={`notification ${notification.type}`}>
                <div className="notification-header">{notification.header}</div>
                <div className="notification-content">
                  <div className="notification-details">
                    <div className="notification-icon">{getIcon(notification.icon)}</div>
                    <p className="notification-message">{notification.message}</p>
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
              </div>
              
            )
          ))}

            <div className='flex items-center gap-2'>
              <IoAlertCircleOutline size={20} />
              <div className='flex flex-col gap-1'>
                <h5 className='my-0 py-0'>
                  title
                </h5>
                <span style={{fontSize: '0.6rem'}}>
                  description.................
                </span>
              </div>
            </div>

          </div>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Notification;
