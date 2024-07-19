import React, { useEffect, useRef, useState } from 'react';
import './Notifications.scss';
import { IonContent } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { AiFillCheckCircle, AiFillWarning } from 'react-icons/ai';
import { BiSolidErrorAlt } from 'react-icons/bi';
import { IoAlertCircle } from 'react-icons/io5';
import { connect } from '../../../data/connect';
import { setNotificationData } from '../../../data/sessions/sessions.actions';

const Notification = (props: any) => {
  const cardRef = useRef<HTMLIonCardElement>(null);
  const [notifications, setNotifications] = useState(props.notification);
  const history = useHistory();

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
    const clone = JSON.parse(JSON.stringify(notifications));
    const nNew = clone.map((notification, i) => {
      if (i === index) {
        notification.completed = true;
      }
      return notification;
    });
    setNotifications(nNew);
    props.setNotificationData(nNew);
  };

  const handleNotificationClick = (type) => {
    if (type === 'alert') {
      history.push('/ctabs/questions'); // replace '/alert-page' with your desired path
    }
  };

  return (
    <IonContent id="care-notification-container" className="ion-padding">
      <div className="flex flex-col">
        {notifications.map(
          (notification, index) =>
            !notification.completed &&
            notification.for !== 'patient' && (
              <div
                key={index}
                className={`notification ${notification.type}`}
                onClick={() => handleNotificationClick(notification.type)}
              >
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

export default connect<any>({
  mapStateToProps: (state) => ({
    notification: state.data.notification,
  }),
  mapDispatchToProps: {
    setNotificationData,
  },
  component: Notification,
});
